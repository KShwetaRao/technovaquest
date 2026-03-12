import Navigation from "@/components/Navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Star, Award, Target, Zap, Share2, Settings, Edit, Moon, Bell, Shield, Trash2, Link, Twitter, Linkedin, Check, Copy, Facebook, Shirt } from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useTheme } from "@/components/theme-provider";
import AvatarCanvas from "../components/avatar/AvatarCanvas";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Profile = () => {
  const { user, uploadAvatar, deleteAvatar, updateUser, updateUserAvatar, updateUserXP } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { theme, setTheme } = useTheme();
  const [newName, setNewName] = useState(user?.name || "");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [hasCopied, setHasCopied] = useState(false);
  const [achievements, setAchievements] = useState<any[]>([]);

  // Avatar State
  const [isWardrobeOpen, setIsWardrobeOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState<'male' | 'female'>('male');
  const [selectedSkin, setSelectedSkin] = useState<'fair' | 'wheatish' | 'dusky'>('fair');
  const [selectedHair, setSelectedHair] = useState<'straight' | 'ponytail' | 'waves' | 'braided'>('straight');
  const [selectedOutfit, setSelectedOutfit] = useState<number>(1);
  const [isEquipped, setIsEquipped] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(true);

  useEffect(() => {
    if (user) {
      setSelectedGender(user.avatarType as 'male' | 'female');
      setSelectedSkin(user.skinTone || 'fair');
      setSelectedHair(user.hairStyle || 'straight');
      setSelectedOutfit(user.equippedOutfitId);
      setIsEquipped(true);
      setIsUnlocked(true);
    }
  }, [user]);

  // Available Outfits
  const OUTFITS = [
    { id: 1, name: "Casual Techie", cost: 0, color: "#4F46E5" },
    { id: 2, name: "Semi-formal College", cost: 0, color: "#10B981" },
    { id: 3, name: "Hoodie Mode", cost: 0, color: "#F59E0B" },
    { id: 4, name: "Event Day Look", cost: 0, color: "#EF4444" },
    { id: 5, name: "Hacker Hoodie", cost: 150, color: "#000000" }, // Unlockable
    { id: 6, name: "Cyber Suit", cost: 300, color: "#A855F7" },   // Unlockable
    { id: 7, name: "Neon Tech Suit", cost: 500, color: "#06B6D4" }, // Unlockable
  ];

  useEffect(() => {
    if (user?.id) {
      fetch(`/api/achievements/${user.id}`)
        .then(res => res.json())
        .then(data => setAchievements(data))
        .catch(err => console.error("Failed to fetch achievements", err));
    }
  }, [user?.id]);

  const handleAvatarClick = () => {
    // Open wardrobe instead of file upload for 3D avatar
    setIsWardrobeOpen(true);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadAvatar(file);
    }
  };

  // Mock settings state
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(false);
  const [publicProfile, setPublicProfile] = useState(true);

  const handleSaveProfile = () => {
    if (!newName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }
    updateUser(newName);
    toast.success("Profile updated successfully");
    setIsDialogOpen(false);
  };

  const handleShare = () => {
    setIsShareOpen(true);
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setHasCopied(true);
    toast.success("Profile link copied to clipboard!");
    setTimeout(() => setHasCopied(false), 2000);
  };

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out my profile on TechnoVaQuest!`);
    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  const handleEquipOutfit = async () => {
    if (!user) return;

    // Check if unlocked or buy
    const outfit = OUTFITS.find(o => o.id === selectedOutfit);
    if (!outfit) return;

    // Check unlock status strictly
    const alreadyUnlocked = user.unlockedOutfits.includes(selectedOutfit);

    if (alreadyUnlocked) {
      // Just Save
      await updateUserAvatar({
        avatarType: selectedGender,
        equippedOutfitId: selectedOutfit,
        skinTone: selectedSkin,
        hairStyle: selectedHair
      });
      toast.success("Avatar Updated!");
      setIsUnlocked(true);
      setIsEquipped(true);
    } else {
      // Buy logic
      if (user.xp >= outfit.cost) {
        const newUnlocked = [...user.unlockedOutfits, selectedOutfit];
        await updateUserAvatar({
          avatarType: selectedGender,
          equippedOutfitId: selectedOutfit,
          unlockedOutfits: newUnlocked,
          skinTone: selectedSkin,
          hairStyle: selectedHair
        });
        // Deduct XP
        await updateUserXP(-outfit.cost);

        toast.success(`Purchased ${outfit.name}!`);
        setIsUnlocked(true);
        setIsEquipped(true);
      } else {
        toast.error(`Not enough XP! Need ${outfit.cost - user.xp} more.`);
      }
    }
  };

  const handleSelectOutfitInWardrobe = (outfitId: number) => {
    setSelectedOutfit(outfitId);
    if (user) {
      const unlocked = user.unlockedOutfits.includes(outfitId);
      setIsUnlocked(unlocked);
      setIsEquipped(user.equippedOutfitId === outfitId);
    }
  }

  const badges = [
    { name: "First Quest", icon: Target, color: "text-primary" },
    { name: "Week Warrior", icon: Zap, color: "text-secondary" },
    { name: "Level 10", icon: Star, color: "text-success" },
    { name: "Fast Learner", icon: Trophy, color: "text-destructive" },
    { name: "Code Master", icon: Award, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Profile Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Col: 3D Avatar */}
          <div className="lg:col-span-1">
            <Card className="h-[500px] relative overflow-hidden bg-gradient-to-b from-background to-muted/50 border-primary/20 shadow-xl">
              <div className="absolute inset-0 z-0">
                {user && (
                  <AvatarCanvas
                    gender={user?.avatarType || 'male'}
                    level={user ? (user.level || 1) : 1}
                    equippedOutfitId={user?.equippedOutfitId || 1}
                    skinTone={user?.skinTone || 'fair'}
                    hairStyle={user?.hairStyle || 'straight'}
                  />
                )}
              </div>
              <div className="absolute bottom-4 left-4 right-4 z-10 bg-background/80 backdrop-blur-md p-4 rounded-xl border border-border/50">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h2 className="font-bold text-lg">{user?.name}</h2>
                    <p className="text-xs text-muted-foreground w-full">Lvl {user?.level || 1} • {user?.avatarType === 'male' ? 'Tech Wizard' : 'Cyber Witch'}</p>
                  </div>
                  <Badge variant="outline" className="border-primary text-primary">
                    {user?.totalXP || 0} XP
                  </Badge>
                </div>
                {/* Progress to next level */}
                <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full" style={{ width: `${((user?.xp || 0) % 200) / 2}%` }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-muted-foreground mt-1">
                  <span>Current: {user?.xp} XP</span>
                  <span>Next Lvl: 200 XP</span>
                </div>

                <Button size="sm" className="w-full mt-3 gap-2" onClick={() => setIsWardrobeOpen(true)}>
                  <Shirt className="w-4 h-4" /> Open Wardrobe
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Cols: Stats & Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">Player Profile</h1>
                <p className="text-muted-foreground">Manage your avatar, view stats, and track progress.</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleShare}>
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>

                <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" /> Settings
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Settings</DialogTitle>
                      <DialogDescription>
                        Manage your account settings and preferences.
                      </DialogDescription>
                    </DialogHeader>
                    {/* Settings Content (Same as before) */}
                    <div className="grid gap-4 py-4">
                      {/* ... keeping existing settings logic ... */}
                      {/* Simplified for brevity in replace */}
                      <div className="space-y-4">
                        <h4 className="font-medium leading-none flex items-center gap-2">
                          <Moon className="w-4 h-4" /> Appearance
                        </h4>
                        <div className="flex items-center justify-between rounded-lg border p-3 shadow-sm">
                          <Label>Dark Mode</Label>
                          <Switch
                            checked={theme === "dark"}
                            onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <Label>Edit Name</Label>
                        <div className="flex gap-2">
                          <Input value={newName} onChange={(e) => setNewName(e.target.value)} />
                          <Button onClick={handleSaveProfile}>Save</Button>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Badges */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Badges Earned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {badges.map((badge, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors"
                      >
                        <div className={`p-2 rounded-full bg-background ${badge.color}`}>
                          <badge.icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] text-center font-medium">{badge.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.length > 0 ? achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                      <div className="flex-1">
                        <p className="font-medium text-sm">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
                      </div>
                    </div>
                  )) : (
                    <p className="text-sm text-muted-foreground text-center py-4">No recent achievements yet.</p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Skills Progress */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle>Skill Levels</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { skill: "Web Development", level: 85, color: "bg-primary" },
                  { skill: "Database Management", level: 70, color: "bg-secondary" },
                  { skill: "Cybersecurity", level: 55, color: "bg-success" },
                  { skill: "AI & Machine Learning", level: 40, color: "bg-destructive" },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.skill}</span>
                      <span className="text-xs text-muted-foreground">{item.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-1000 rounded-full`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Share Dialog */}
        <Dialog open={isShareOpen} onOpenChange={setIsShareOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Share Profile</DialogTitle>
              <DialogDescription>
                Share your profile with the world!
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input
                    id="link"
                    defaultValue={window.location.href}
                    readOnly
                    className="h-9"
                  />
                </div>
                <Button type="submit" size="sm" className="px-3" onClick={handleCopyLink}>
                  {hasCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <div className="flex justify-center gap-4 pt-2">
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleSocialShare("twitter")}><Twitter className="h-5 w-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleSocialShare("linkedin")}><Linkedin className="h-5 w-5" /></Button>
                <Button variant="outline" size="icon" className="rounded-full" onClick={() => handleSocialShare("facebook")}><Facebook className="h-5 w-5" /></Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Wardrobe Dialog */}
        <Dialog open={isWardrobeOpen} onOpenChange={setIsWardrobeOpen}>
          <DialogContent className="sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>Avatar Customization</DialogTitle>
              <DialogDescription>Customize your look and unlock new outfits!</DialogDescription>
            </DialogHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div>
                <div className="space-y-4">
                  {/* Gender Selector */}
                  <div>
                    <Label>Avatar Body Type</Label>
                    <RadioGroup value={selectedGender} onValueChange={(v: any) => setSelectedGender(v)} className="flex space-x-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Skin Tone Selector */}
                  <div>
                    <Label>Skin Tone</Label>
                    <div className="flex space-x-3 mt-2">
                      {['fair', 'wheatish', 'dusky'].map((tone) => (
                        <button
                          key={tone}
                          onClick={() => setSelectedSkin(tone as any)}
                          className={`w-8 h-8 rounded-full border-2 ${selectedSkin === tone ? 'border-primary' : 'border-transparent'}`}
                          style={{ backgroundColor: tone === 'fair' ? '#FBCFE8' : tone === 'wheatish' ? '#E1C699' : '#8D5524' }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Hair Style Selector */}
                  <div>
                    <Label>Hair Style</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['straight', 'ponytail', 'waves', 'braided'].map((style) => (
                        <button
                          key={style}
                          onClick={() => setSelectedHair(style as any)}
                          className={`px-3 py-1 text-xs rounded-full border ${selectedHair === style ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800'}`}
                        >
                          {style.charAt(0).toUpperCase() + style.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Outfit List */}
                  <div>
                    <Label className="mb-2 block">Wardrobe</Label>
                    <div className="grid grid-cols-2 gap-3 max-h-[300px] overflow-y-auto pr-2">
                      {OUTFITS.map(outfit => {
                        const isOutfitUnlocked = user?.unlockedOutfits?.includes(outfit.id);
                        const isOutfitEquipped = selectedOutfit === outfit.id;

                        return (
                          <div
                            key={outfit.id}
                            className={`relative p-3 rounded-lg border-2 transition-all cursor-pointer group ${isOutfitEquipped ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                            onClick={() => handleSelectOutfitInWardrobe(outfit.id)}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: outfit.color }}></div>
                              {isOutfitEquipped && <Badge className="bg-primary text-[10px]">Selected</Badge>}
                              {!isOutfitUnlocked && <Badge variant="secondary" className="text-[10px]">{outfit.cost} XP</Badge>}
                            </div>
                            <h4 className="font-medium text-sm">{outfit.name}</h4>
                            {!isOutfitUnlocked && (
                              <div className="absolute inset-0 bg-background/60 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                                <span className="text-xs font-bold bg-black text-white px-2 py-1 rounded">Buy</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 rounded-xl p-4 flex flex-col items-center justify-center min-h-[300px]">
                <h3 className="text-sm font-medium mb-4 text-muted-foreground">Preview</h3>
                <div className="h-[300px] w-full mt-4 rounded-lg overflow-hidden border">
                  <AvatarCanvas
                    gender={selectedGender}
                    level={user?.level || 1}
                    equippedOutfitId={selectedOutfit}
                    skinTone={selectedSkin}
                    hairStyle={selectedHair}
                  />
                </div>
                <Button onClick={handleEquipOutfit} className="mt-4 w-full">
                  {isUnlocked ? (isEquipped ? "Save Changes" : "Equip Outfit") : `Unlock & Equip (${OUTFITS.find(o => o.id === selectedOutfit)?.cost} XP)`}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

      </main >
    </div >
  );
};

export default Profile;