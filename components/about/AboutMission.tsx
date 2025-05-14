const AboutMission = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
              At EduHope, we believe that education is the most powerful tool for transforming lives and communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To provide access to quality education for underserved communities by building schools, training teachers, and developing sustainable educational ecosystems that empower children to reach their full potential.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-red-600 dark:text-red-400">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                A world where every child, regardless of their background or circumstances, has access to quality education and the opportunity to build a better future for themselves and their communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;