import { useState } from "react";
import { Heart, CheckCircle2, XCircle, Star } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  loveMessage: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's my favorite thing about you?",
    options: ["Your smile", "Your eyes", "Your laugh", "Everything! 💕"],
    correctAnswer: 3,
    loveMessage: "Correct! I love absolutely everything about you! 🥰",
  },
  {
    id: 2,
    question: "How many times do I think about you daily?",
    options: ["Once or twice", "A few times", "Too many to count", "Every single second 💭"],
    correctAnswer: 3,
    loveMessage: "You're always on my mind, every second of every day! 💕",
  },
  {
    id: 3,
    question: "What would I do just to see you smile?",
    options: ["Tell a joke", "Buy you flowers", "Dance silly", "Literally anything! 🌟"],
    correctAnswer: 3,
    loveMessage: "There's nothing I wouldn't do for that beautiful smile! ✨",
  },
  {
    id: 4,
    question: "How special are you to me?",
    options: ["Very special", "Super special", "Extremely special", "Beyond words special 💫"],
    correctAnswer: 3,
    loveMessage: "No words can describe how special you are to me! 💖",
  },
  {
    id: 5,
    question: "What's my favorite way to spend time?",
    options: ["Watching movies", "Going out", "Playing games", "Any moment with you 💑"],
    correctAnswer: 3,
    loveMessage: "Every moment is perfect as long as I'm with you! 🥰",
  },
];

interface LoveQuizProps {
  onComplete: () => void;
}

const LoveQuiz = ({ onComplete }: LoveQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setQuizComplete(true);
      }
    }, 2000);
  };

  if (quizComplete) {
    return (
      <section className="py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-rose-light/50">
            <div className="flex justify-center gap-2 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 text-coral fill-coral"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            
            <h2 className="font-display text-3xl md:text-4xl font-bold text-burgundy mb-4">
              Quiz Complete! 🎉
            </h2>
            
            <p className="font-handwritten text-2xl text-rose-dark mb-6">
              You got {score} out of {questions.length}!
            </p>
            
            <p className="font-body text-lg text-muted-foreground mb-8">
              {score === questions.length
                ? "Perfect score! You know me so well! 💕"
                : "Don't worry, I still love you endlessly! 💖"}
            </p>
            
            <button
              onClick={onComplete}
              className="bg-love-gradient text-primary-foreground font-display text-xl px-8 py-4 rounded-full shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              Continue to the Big Question 💝
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <Heart className="w-10 h-10 text-heart fill-heart mx-auto mb-4 animate-pulse-heart" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy mb-4">
            Love Quiz 💕
          </h2>
          <p className="font-handwritten text-xl text-rose-dark">
            Let's see how well you know my heart!
          </p>
        </div>

        <div className="bg-card rounded-3xl p-6 md:p-8 shadow-soft border border-rose-light/50">
          {/* Progress */}
          <div className="flex gap-2 mb-6">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                  index < currentQuestion
                    ? "bg-heart"
                    : index === currentQuestion
                    ? "bg-rose"
                    : "bg-rose-light"
                }`}
              />
            ))}
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </p>

          <h3 className="font-display text-2xl font-semibold text-burgundy mb-6">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === questions[currentQuestion].correctAnswer;
              
              return (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full p-4 rounded-2xl text-left font-body transition-all duration-300 flex items-center justify-between ${
                    showResult
                      ? isCorrect
                        ? "bg-rose-light border-2 border-rose-dark"
                        : isSelected
                        ? "bg-muted border-2 border-muted-foreground"
                        : "bg-secondary border-2 border-transparent opacity-50"
                      : "bg-secondary border-2 border-transparent hover:border-rose hover:bg-rose-light/50"
                  }`}
                >
                  <span className="text-foreground">{option}</span>
                  {showResult && isCorrect && (
                    <CheckCircle2 className="w-6 h-6 text-rose-dark" />
                  )}
                  {showResult && isSelected && !isCorrect && (
                    <XCircle className="w-6 h-6 text-muted-foreground" />
                  )}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className="mt-6 p-4 bg-rose-light/50 rounded-2xl text-center animate-fade-in">
              <p className="font-handwritten text-xl text-rose-dark">
                {questions[currentQuestion].loveMessage}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LoveQuiz;
