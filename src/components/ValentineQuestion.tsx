import { useState } from "react";
import { Heart, Sparkles, PartyPopper } from "lucide-react";

interface ValentineQuestionProps {
  onYes: () => void;
}

const ValentineQuestion = ({ onYes }: ValentineQuestionProps) => {
  const [noCount, setNoCount] = useState(0);
  const [yesScale, setYesScale] = useState(1);

  const noMessages = [
    "No 😢",
    "Are you sure? 🥺",
    "Really sure? 💔",
    "Think again! 😭",
    "Last chance! 🙏",
    "Please? 🥹",
    "Don't do this! 😿",
    "I'll be sad! 💧",
    "You're breaking my heart! 💔",
    "NOOOOO! 😭😭😭",
  ];

  const handleNo = () => {
    setNoCount((prev) => Math.min(prev + 1, noMessages.length - 1));
    setYesScale((prev) => prev * 1.2);
  };

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-glow border border-rose-light/50 relative overflow-hidden">
          {/* Decorative elements */}
          <Sparkles className="absolute top-4 left-4 w-6 h-6 text-coral animate-pulse" />
          <Sparkles className="absolute top-4 right-4 w-6 h-6 text-coral animate-pulse" style={{ animationDelay: "0.5s" }} />
          <Sparkles className="absolute bottom-4 left-4 w-6 h-6 text-coral animate-pulse" style={{ animationDelay: "1s" }} />
          <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-coral animate-pulse" style={{ animationDelay: "1.5s" }} />

          <div className="flex justify-center mb-6">
            <Heart className="w-20 h-20 text-heart fill-heart animate-pulse-heart" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy mb-4">
            The Big Question
          </h2>

          <p className="font-handwritten text-3xl md:text-4xl text-rose-dark mb-8">
            Will you be my Valentine? 💕
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onYes}
              style={{ transform: `scale(${yesScale})` }}
              className="bg-love-gradient text-primary-foreground font-display text-xl px-8 py-4 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 flex items-center gap-2 origin-center"
            >
              <Heart className="w-5 h-5 fill-current" />
              YES! 💖
              <Heart className="w-5 h-5 fill-current" />
            </button>

            <button
              onClick={handleNo}
              className="bg-secondary text-secondary-foreground font-display text-lg px-6 py-3 rounded-full hover:bg-muted transition-all duration-300"
              style={{
                transform: `scale(${Math.max(0.5, 1 - noCount * 0.08)})`,
                opacity: Math.max(0.4, 1 - noCount * 0.08),
              }}
            >
              {noMessages[noCount]}
            </button>
          </div>

          {noCount > 0 && (
            <p className="mt-6 font-handwritten text-xl text-rose-dark animate-wiggle">
              {noCount >= 5 ? "Come on, you know you want to say yes! 💕" : "Hint: The answer is always yes! 😊"}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ValentineQuestion;
