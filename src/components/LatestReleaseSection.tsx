const LatestReleaseSection = () => {
  return (
    <section className="relative py-24 md:py-32 bg-cosmos">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-gold tracking-cinematic mb-12">
          Latest Release
        </h2>

        {/* YouTube Embed */}
        <div className="w-full max-w-5xl mx-auto aspect-video mb-12">
          <iframe
            className="w-full h-full rounded-sm shadow-2xl"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Aman Riyaz - Mustafa (Official Music Video)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Spotify Button */}
        <a
          href="https://open.spotify.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 border border-gold text-gold font-heading text-sm tracking-cinematic hover:bg-gold hover:text-primary-foreground transition-all duration-500"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          LISTEN ON SPOTIFY
        </a>
      </div>
    </section>
  );
};

export default LatestReleaseSection;
