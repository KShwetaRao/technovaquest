import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    name: string;
    id?: number;
    email?: string;
    avatar_url?: string;
    xp?: number;
    level?: number;
    avatarType: "male" | "female";
    totalXP: number;
    equippedOutfitId: number;
    unlockedOutfits: number[];
    skinTone: 'fair' | 'wheatish' | 'dusky';
    hairStyle: 'straight' | 'ponytail' | 'waves' | 'braided';
}

interface AuthContextType {
    isAuthenticated: boolean;
    isLoading: boolean;
    user: User | null;
    login: (email: string, password: string, name?: string) => Promise<{ success: boolean; message?: string }>;
    logout: () => void;
    updateUser: (name: string) => void;
    uploadAvatar: (file: File) => Promise<void>;
    deleteAvatar: () => Promise<void>;
    updateUserXP: (xpEarned: number) => Promise<void>;
    updateUserAvatar: (updates: Partial<User>) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    // ... (rest of the component)
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    // We can't use useNavigate here directly because AuthProvider is usually outside Router in some setups,
    // but in this project App.tsx wraps everything. 
    // However, to be safe and simple, we'll let the components handle navigation or use window.location if needed,
    // OR we ensure AuthProvider is inside BrowserRouter in App.tsx.
    // Let's assume we will place AuthProvider INSIDE BrowserRouter in App.tsx for useNavigate to work if we wanted to use it here.
    // But to keep it pure, let's just manage state here and let components redirect.

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedAuth = localStorage.getItem("isAuthenticated");
        const storedUser = localStorage.getItem("user");

        if (storedAuth === "true") {
            setIsAuthenticated(true);
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string, name?: string) => {
        try {
            const endpoint = name ? '/api/auth/signup' : '/api/auth/login';
            const body = name ? { email, password, name } : { email, password };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });

            const text = await response.text();
            console.log("Raw response:", text);

            let data;
            try {
                data = JSON.parse(text);
            } catch (e) {
                throw new Error(`Server error: ${text.substring(0, 50)}...`);
            }

            if (!response.ok) {
                throw new Error(data.message || 'Authentication failed');
            }

            setIsAuthenticated(true);
            // Ensure avatar defaults
            const userData: User = {
                ...data.user,
                avatarType: data.user.avatarType || 'male',
                totalXP: data.user.totalXP || data.user.xp || 0,
                equippedOutfitId: data.user.equippedOutfitId || 1,
                unlockedOutfits: data.user.unlockedOutfits || [1, 2, 3, 4],
                skinTone: data.user.skinTone || 'fair',
                hairStyle: data.user.hairStyle || 'straight',
            };
            setUser(userData);
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", data.token);

            return { success: true };
        } catch (error: any) {
            console.error("Auth error:", error);
            return { success: false, message: error.message };
        }
    };
    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user");
    };

    const updateUser = (name: string) => {
        if (user) {
            const updatedUser = { ...user, name };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        }
    };

    const uploadAvatar = async (file: File) => {
        if (!user || !user.id) return;

        const formData = new FormData();
        formData.append('avatar', file);
        formData.append('userId', user.id.toString());

        try {
            const response = await fetch('/api/auth/upload-avatar', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) throw new Error('Upload failed');

            const data = await response.json();
            const updatedUser = { ...user, avatar_url: data.avatarUrl };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        } catch (error) {
            console.error("Error uploading avatar:", error);
        }
    };

    const deleteAvatar = async () => {
        if (!user || !user.id) return;

        try {
            const response = await fetch('/api/auth/delete-avatar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: user.id }),
            });

            if (!response.ok) throw new Error('Delete failed');

            const updatedUser = { ...user, avatar_url: undefined };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        } catch (error) {
            console.error("Error deleting avatar:", error);
        }
    };

    const updateUserXP = async (xpEarned: number) => {
        if (!user || !user.id) return;

        try {
            const response = await fetch('/api/auth/update-xp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId: user.id, xpEarned }),
            });

            if (!response.ok) throw new Error('Failed to update XP');

            const data = await response.json();
            const updatedUser = {
                ...user,
                xp: data.xp,
                level: data.level,
                totalXP: data.totalXP || (user.totalXP || 0) + xpEarned
            };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser)); // Persist locally
        } catch (error) {
            console.error("Error updating XP:", error);
        }
    };

    const updateUserAvatar = async (updates: Partial<User>) => {
        if (!user) return;

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('/api/auth/update-avatar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    userId: user.id,
                    avatarType: updates.avatarType,
                    equippedOutfitId: updates.equippedOutfitId,
                    unlockedOutfits: updates.unlockedOutfits,
                    skinTone: updates.skinTone,
                    hairStyle: updates.hairStyle
                }),
            });

            if (!response.ok) throw new Error('Failed to update avatar settings');

            const updatedUser = { ...user, ...updates };
            setUser(updatedUser);
            localStorage.setItem("user", JSON.stringify(updatedUser));
        } catch (error) {
            console.error("Error updating avatar settings:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, user, login, logout, updateUser, uploadAvatar, deleteAvatar, updateUserXP, updateUserAvatar }}>
            {children}
        </AuthContext.Provider>
    );
};
