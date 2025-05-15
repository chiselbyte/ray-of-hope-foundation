"use client";

const VideosGrid = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Embed the YouTube iframe */}
        <div className="relative aspect-w-16 aspect-h-9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/yQ4i2J1MY90?si=X4kybVtVcD6ivFoZ&controls=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideosGrid;