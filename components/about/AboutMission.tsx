const AboutMission = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Mission & Vision
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To inspire sustainable innovation in national education using grassroots approaches to improve accountability and learner outcomes.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A world where every child has the right to quality education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;