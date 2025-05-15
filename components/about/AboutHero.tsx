const AboutHero = () => {
  return (
    <section className="relative bg-blue-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg md:text-xl opacity-90">
            Dedicated to transforming lives through the power of education since 2008.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white dark:bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default AboutHero;