import Navigation from "@/components/Navigation";
import herobg from "@/assets/herobg.jpg";
const Index = () => {
  const heroBgStyle = {
    backgroundImage: `url(${herobg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHheight: '100vh',
    width: '100vw',
  };

  return (
    <div style={heroBgStyle} className="min-h-screen">
      
      <Navigation />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <h1 className="text-4xl font-bold">Welcome to TechnoQuest</h1>
        <p className="text-muted-foreground">Your adventure in technology starts here.</p>
        
      </main>
    </div>
  );
};

export default Index;