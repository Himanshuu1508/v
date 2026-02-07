import { Heart } from "lucide-react";

const reasons = [
  "Your beautiful smile that lights up my day ✨",
  "If forever has a face, it looks a lot like you ❤️",
  "With you, even silence feels warm and comforting.",
  "Your kindness and caring heart 💕",
  "The sparkle in your eyes when you're happy 🌟",
  "How you make every moment special 🎀",
  "You don’t just light up my life—you are the light.",
  "You’re my favorite thought, even on my busiest days.",
  "How comfortable I feel around you 🏠",
  "Simply because you're YOU! 💖",
];

const ReasonsILoveYou = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-10 h-10 text-heart fill-heart mx-auto mb-4 animate-pulse-heart" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy mb-4">
            10 Reasons I Love You
          </h2>
          <p className="font-handwritten text-2xl text-rose-dark">
            (Though the list is endless 💕)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-5 shadow-soft border border-rose-light/50 hover:shadow-glow hover:border-rose transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 bg-love-gradient rounded-full flex items-center justify-center text-primary-foreground font-display font-bold">
                  {index + 1}
                </span>
                <p className="font-body text-lg text-foreground pt-1.5">
                  {reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;
