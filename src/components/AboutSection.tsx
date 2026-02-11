import aboutPhoto from "@/assets/about-photo.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";
const AboutSection = () => {
  const {
    ref: imgRef,
    isVisible: imgVisible
  } = useScrollReveal();
  const {
    ref: textRef,
    isVisible: textVisible
  } = useScrollReveal(0.2);
  return <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        
      </div>
    </section>;
};
export default AboutSection;