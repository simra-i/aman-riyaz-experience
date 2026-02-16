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

      {/* Slow-moving fog layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[200%] h-full opacity-15 blur-2xl animate-[fog-drift_25s_linear_infinite]"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, hsl(345 40% 20% / 0.6) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, hsl(345 30% 15% / 0.4) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute w-[200%] h-full opacity-10 blur-3xl animate-[fog-drift_35s_linear_infinite_reverse]"
          style={{
            background: "radial-gradient(ellipse at 50% 40%, hsl(0 0% 20% / 0.5) 0%, transparent 55%), radial-gradient(ellipse at 20% 70%, hsl(345 50% 15% / 0.3) 0%, transparent 45%)",
          }}
        />
        <div
          className="absolute w-[200%] h-full opacity-[0.08] blur-2xl animate-[fog-drift_40s_linear_infinite]"
          style={{
            top: "20%",
            background: "radial-gradient(ellipse at 60% 50%, hsl(40 30% 30% / 0.3) 0%, transparent 50%)",
          }}
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
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-ultra gradient-gold-text animate-fade-in-up"
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
    </section>
  );
};

export default HeroSection;
