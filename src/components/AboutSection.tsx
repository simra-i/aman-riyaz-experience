import aboutPhoto from "@/assets/about-photo.png";

const AboutSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 rounded-sm bg-gradient-to-br from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src={aboutPhoto}
              alt="Aman Riyaz close-up portrait with sunglasses"
              className="w-full rounded-sm shadow-2xl"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-gold tracking-cinematic mb-8">
              About The Artist
            </h2>
            <div className="space-y-6 font-body text-foreground/80 leading-relaxed text-base md:text-lg">
              <p>
                Aman Riyaz is an Indian Pop Artist, singer-songwriter, and producer based in
                Bengaluru, India. Known for his signature "Urban Mystic" sound, Aman blends dark,
                moody aesthetics with soulful Urdu poetry to create a modern fusion of Desi Hip-Hop
                and Commercial Pop.
              </p>
              <p>
                A multi-disciplinary artist, Aman Riyaz directs his own visuals. His latest single,
                "Mustafa" (2026), has established him as a rising force in the Indian independent
                music scene, bridging the gap between underground grit and mainstream appeal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
