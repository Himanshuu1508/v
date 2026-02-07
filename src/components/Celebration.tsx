import { useState, useEffect } from "react";
import { Heart, Sparkles, PartyPopper, Star } from "lucide-react";

interface ConfettiPiece {
  id: number;
  left: number;
  delay: number;
  color: string;
  size: number;
}

const Celebration = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ["#F472B6", "#FB7185", "#FBBF24", "#A78BFA", "#F87171", "#34D399"];
    const pieces: ConfettiPiece[] = [];
    
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 10 + 5,
      });
    }
    
    setConfetti(pieces);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="fixed pointer-events-none"
          style={{
            left: `${piece.left}%`,
            top: "-20px",
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
            animation: `confetti-fall 4s ease-in forwards`,
            animationDelay: `${piece.delay}s`,
          }}
        />
      ))}

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="bg-card/95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-glow border border-rose-light/50">
          <div className="flex justify-center gap-3 mb-6">
            <PartyPopper className="w-12 h-12 text-coral animate-bounce-soft" />
            <Heart className="w-16 h-16 text-heart fill-heart animate-pulse-heart" />
            <PartyPopper className="w-12 h-12 text-coral animate-bounce-soft" style={{ transform: "scaleX(-1)" }} />
          </div>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-burgundy mb-4">
            YAY! 🎉
          </h1>

          <p className="font-handwritten text-3xl md:text-4xl text-rose-dark mb-6">
            You said YES! 💕
          </p>

          <div className="space-y-4 mb-8">
            <p className="font-body text-xl text-foreground">
              You've just made me the happiest person in the world! 🥰
            </p>
            <p className="font-body text-lg text-muted-foreground">
              I promise to make this Valentine's Day and every day after absolutely magical for you.
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-8 h-8 text-heart fill-heart animate-pulse-heart"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <div className="bg-rose-light/50 rounded-2xl p-6">
            <p className="font-handwritten text-2xl text-burgundy mb-2">
              "I love you more than words can say"
            </p>
            <p className="font-body text-muted-foreground">
              Happy Valentine's Day, my love! 💖
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-coral" />
            <p className="font-handwritten text-xl text-rose-dark">
              Forever yours, with all my heart
            </p>
            <Sparkles className="w-5 h-5 text-coral" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Celebration;
