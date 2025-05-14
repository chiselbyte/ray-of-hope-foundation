const Stats = () => {
  return (
    <section className="py-16 md:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact
          </h2>
          <p className="text-lg opacity-90">
            Through dedication and collaboration, we've made a real difference in the lives of many.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="15+" text="Years of Service" />
          <StatItem number="127" text="Schools Supported" />
          <StatItem number="2,500+" text="Teachers Trained" />
          <StatItem number="50,000+" text="Children Educated" />
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