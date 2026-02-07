import { Heart, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onContinue: () => void;
}

const HeroSection = ({ onContinue }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Heart className="w-8 h-8 text-heart fill-heart animate-pulse-heart" />
          <Heart className="w-12 h-12 text-heart fill-heart animate-pulse-heart" style={{ animationDelay: "0.2s" }} />
          <Heart className="w-8 h-8 text-heart fill-heart animate-pulse-heart" style={{ animationDelay: "0.4s" }} />
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl font-bold text-burgundy leading-tight">
          Hey Beautiful
          <span className="block font-handwritten text-6xl md:text-8xl text-rose-dark mt-2">
            ✨
          </span>
        </h1>
        
        <p className="font-handwritten text-3xl md:text-4xl text-rose-dark max-w-lg mx-auto">
          I have something special to ask you...
        </p>
        
        <p className="font-body text-lg text-muted-foreground max-w-md mx-auto">
          But first, let me take you on a little journey through my heart 💕
        </p>
        
        <button
          onClick={onContinue}
          className="mt-8 group flex flex-col items-center gap-2 text-rose-dark hover:text-heart transition-colors duration-300"
        >
          <span className="font-handwritten text-xl">Scroll down, my love</span>
          <ChevronDown className="w-8 h-8 animate-bounce-soft" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
