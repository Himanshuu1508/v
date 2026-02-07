import { Heart, Sparkles } from "lucide-react";

const LoveLetter = () => {
  return (
    <section className="py-20 px-4 bg-romantic">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Sparkles className="w-8 h-8 text-coral mx-auto mb-4" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy mb-4">
            A Letter For You
          </h2>
        </div>

        <div className="relative">
          {/* Letter decoration */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-rose-light rounded-full opacity-60" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-coral/30 rounded-full" />
          
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-rose-light/50 relative overflow-hidden">
            {/* Paper texture effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-light/10 to-transparent pointer-events-none" />
            
            <div className="relative space-y-6">
              <p className="font-handwritten text-2xl text-burgundy leading-relaxed">
                My Dearest Love,
              </p>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                From the moment I met you, my life has been filled with colors I never knew existed. 
                Your smile is the sunshine that brightens even my darkest days, and your laughter 
                is the melody that plays on repeat in my heart.
              </p>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                Every moment spent with you feels like a beautiful dream I never want to wake up from. 
                You've shown me what it means to truly love someone, and I'm so grateful that 
                the universe brought us together.
              </p>
              
              <p className="font-body text-lg text-foreground leading-relaxed">
                You're not just my love; you're my best friend, my confidant, and my favorite person 
                in the entire world. I can't imagine a single day without your presence in my life.
              </p>
              
              <p className="font-handwritten text-2xl text-rose-dark leading-relaxed">
                With all my love and a million kisses,
              </p>
              
              <div className="flex items-center gap-2">
                <p className="font-handwritten text-3xl text-burgundy">
                  Forever Yours
                </p>
                <Heart className="w-6 h-6 text-heart fill-heart animate-pulse-heart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
