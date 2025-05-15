const History = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              From humble beginnings to impactful global presence
            </p>
          </div>
          
          <div className="space-y-12">
            <HistoryItem 
              year="2008"
              title="The Beginning"
              description="EduHope was founded by a group of educators and social entrepreneurs committed to improving educational access in underserved communities."
            />
            <HistoryItem 
              year="2010"
              title="First School Project"
              description="We completed our first school building project in a rural community, providing quality educational facilities to over 200 children."
            />
            <HistoryItem 
              year="2013"
              title="Teacher Training Program"
              description="Launched our comprehensive teacher training program to enhance educational quality and student outcomes."
            />
            <HistoryItem 
              year="2016"
              title="Global Expansion"
              description="Expanded our operations to three additional countries, bringing our educational programs to thousands more children."
            />
            <HistoryItem 
              year="2020"
              title="Digital Education Initiative"
              description="Launched our digital literacy program to bridge the technology gap in underserved communities."
            />
            <HistoryItem 
              year="Today"
              title="Continuing Impact"
              description="We continue to grow our programs and impact, working with communities across the globe to transform lives through education."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const HistoryItem = ({ 
  year, 
  title, 
  description 
}: { 
  year: string; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 mb-4 md:mb-0">
        <div className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-bold text-lg">
          {year}
        </div>
      </div>
      <div className="md:w-3/4">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default History;