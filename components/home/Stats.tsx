const Stats = () => {
  return (
    <section className="py-16 md:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-lg opacity-90">
            Every big change in the world starts with one person.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="10" text="States" />
          <StatItem number="35" text="Projects" />
          <StatItem number="65" text="Villages & Slums" />
          <StatItem number="20K+" text="Happy Faces" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, text }: { number: string; text: string }) => {
  return (
    <div>
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">{number}</p>
      <p className="text-sm md:text-base opacity-80">{text}</p>
    </div>
  );
};

export default Stats;