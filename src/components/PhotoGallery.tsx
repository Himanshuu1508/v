import { Heart } from "lucide-react";
import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";

const photos = [
  {
    id: 1,
    src: photo1,
    caption: "Every moment with you is magical ✨",
  },
  {
    id: 2,
    src: photo2,
    caption: "Your smile lights up my world 🌟",
  },
  {
    id: 3,
    src: photo3,
    caption: "Together is my favorite place to be 💕",
  },
  {
    id: 4,
    src: photo4,
    caption: "You make everything better 🥰",
  },
];

const PhotoGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Heart className="w-10 h-10 text-heart fill-heart mx-auto mb-4 animate-pulse-heart" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-burgundy mb-4">
            Our Beautiful Moments
          </h2>
          <p className="font-handwritten text-2xl text-rose-dark">
            Every picture tells our story 📸
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-soft bg-card border border-rose-light/50 hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="font-handwritten text-xl text-white p-6">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
