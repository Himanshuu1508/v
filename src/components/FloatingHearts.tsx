import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface FloatingHeart {
  id: number;
  left: number;
  delay: number;
  size: number;
  duration: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts: FloatingHeart[] = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 8,
          size: Math.random() * 20 + 12,
          duration: Math.random() * 4 + 6,
        });
      }
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="absolute text-rose/30 fill-rose/20"
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            width: heart.size,
            height: heart.size,
            animation: `float-heart ${heart.duration}s ease-in-out infinite`,
            animationDelay: `${heart.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
