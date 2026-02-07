import { useState, useRef } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";
import ReasonsILoveYou from "@/components/ReasonsILoveYou";
import LoveQuiz from "@/components/LoveQuiz";
import ValentineQuestion from "@/components/ValentineQuestion";
import Celebration from "@/components/Celebration";

const Index = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuizComplete = () => {
    setShowQuestion(true);
    setTimeout(() => {
      const element = document.getElementById("valentine-question");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleYes = () => {
    setShowCelebration(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showCelebration) {
    return (
      <div className="min-h-screen bg-romantic">
        <FloatingHearts />
        <Celebration />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-romantic">
      <FloatingHearts />
      
      <HeroSection onContinue={scrollToContent} />
      
      <div ref={contentRef}>
        <PhotoGallery />
        <LoveLetter />
        <ReasonsILoveYou />
        
        {!showQuiz ? (
          <section className="py-20 px-4 text-center">
            <button
              onClick={() => setShowQuiz(true)}
              className="bg-love-gradient text-primary-foreground font-display text-xl px-10 py-5 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 animate-bounce-soft"
            >
              Ready for a Fun Quiz? 💕
            </button>
          </section>
        ) : (
          <LoveQuiz onComplete={handleQuizComplete} />
        )}
        
        {showQuestion && (
          <div id="valentine-question">
            <ValentineQuestion onYes={handleYes} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
