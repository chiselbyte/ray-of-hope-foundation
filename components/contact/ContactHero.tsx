const ContactHero = () => {
  return (
    <section className="relative bg-red-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl opacity-90">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-12 bg-white dark:bg-background" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
    </section>
  );
};

export default ContactHero;