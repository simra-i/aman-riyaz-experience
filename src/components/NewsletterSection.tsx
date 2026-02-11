import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const countryCodes = [
  { code: "+91", label: "🇮🇳 +91" },
  { code: "+1", label: "🇺🇸 +1" },
  { code: "+44", label: "🇬🇧 +44" },
  { code: "+61", label: "🇦🇺 +61" },
  { code: "+971", label: "🇦🇪 +971" },
  { code: "+966", label: "🇸🇦 +966" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+60", label: "🇲🇾 +60" },
  { code: "+49", label: "🇩🇪 +49" },
  { code: "+33", label: "🇫🇷 +33" },
  { code: "+81", label: "🇯🇵 +81" },
  { code: "+86", label: "🇨🇳 +86" },
  { code: "+82", label: "🇰🇷 +82" },
  { code: "+55", label: "🇧🇷 +55" },
  { code: "+27", label: "🇿🇦 +27" },
];

const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", { name, email, phone: `${countryCode}${phone}` });
  };

  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-6 md:px-12 max-w-2xl text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-4xl text-gold tracking-cinematic mb-4">
          Inner Circle
        </h2>
        <p className="font-body text-muted-foreground mb-10 text-base">
          Be the first to hear new releases, tour dates, and exclusive content.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-5 py-4 bg-muted border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 bg-muted border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300"
            required
          />
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-3 py-4 bg-muted border border-border text-foreground font-body focus:outline-none focus:border-gold transition-colors duration-300 min-w-[110px]"
            >
              {countryCodes.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              className="flex-1 px-5 py-4 bg-muted border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors duration-300"
              maxLength={15}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-10 py-4 bg-gold text-primary-foreground font-heading text-sm tracking-cinematic hover:bg-gold-light transition-colors duration-500"
          >
            JOIN THE CIRCLE
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
