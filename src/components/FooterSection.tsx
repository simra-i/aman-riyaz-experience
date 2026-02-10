import { Music, Instagram, Youtube } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer className="relative py-16 md:py-24 bg-cosmos border-t border-border">
      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h3 className="font-heading text-2xl md:text-4xl text-gold tracking-ultra mb-8">
          A M A N R I Y A Z
        </h3>

        <div className="flex items-center justify-center gap-8 mb-10">
          <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors duration-300 hover:scale-110 transform" aria-label="Spotify">
            <Music className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors duration-300 hover:scale-110 transform" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors duration-300 hover:scale-110 transform" aria-label="YouTube">
            <Youtube className="w-6 h-6" />
          </a>
        </div>

        <p className="font-body text-xs text-muted-foreground tracking-wider">
          &copy; {new Date().getFullYear()} AMAN RIYAZ. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
