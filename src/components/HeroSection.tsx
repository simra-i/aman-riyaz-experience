import heroImage from "@/assets/hero-guitar.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Radial glow behind artist */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(345 60% 25%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Artist Image */}
        <div className="relative w-[320px] md:w-[420px] lg:w-[480px] mb-8 animate-fade-in">
          <img
            src={heroImage}
            alt="Aman Riyaz holding a guitar"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Name */}
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-cinematic gradient-gold-text animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          AMAN RIYAZ
        </h1>

        {/* Subtitle */}
        <h2
          className="font-heading text-sm md:text-base tracking-ultra text-gold-light mt-4 animate-fade-in-up"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          INDIAN POP ARTIST
        </h2>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
