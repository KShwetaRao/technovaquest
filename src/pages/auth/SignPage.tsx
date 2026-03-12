import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/use-auth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function SignPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const { login, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      navigate("/");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) {
    return null;
  }

  const handleAuth = async () => {
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (mode === "signup" && !name) {
      toast.error("Please enter your name");
      return;
    }

    // API authentication
    try {
      const result = await login(email, password, mode === "signup" ? name : undefined);

      if (result.success) {
        toast.success(mode === "signin" ? "Welcome back!" : "Account created successfully!");
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Authentication failed");
      }
    } catch (error) {
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl border-border/40 backdrop-blur-xl bg-background/80">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">
              {mode === "signin" ? "Sign In" : "Create Account"}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {/* Name only for Sign Up */}
            {mode === "signup" && (
              <div>
                <Label>Name</Label>
                <Input
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}

            <div>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="w-full mt-2" onClick={handleAuth}>
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </Button>

            <div className="text-center text-sm mt-4">
              {mode === "signin" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    className="text-primary underline"
                    onClick={() => setMode("signup")}
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    className="text-primary underline"
                    onClick={() => setMode("signin")}
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
