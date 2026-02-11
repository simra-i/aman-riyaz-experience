import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LatestReleaseSection from "@/components/LatestReleaseSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <LatestReleaseSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
};

export default Index;
