import { useState } from "react";

const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", { name, email });
  };

  return (
    <section className="relative py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6 md:px-12 max-w-2xl text-center">
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
