import { Heart, Award, Users, Globe } from 'lucide-react';

const Values = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            These principles guide our work and define our approach to education and community development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard 
            icon={<Heart className="text-red-500" size={28} />}
            title="Compassion"
            description="We approach our work with empathy and a deep commitment to understanding and addressing the unique needs of each community."
          />
          <ValueCard 
            icon={<Award className="text-blue-500" size={28} />}
            title="Excellence"
            description="We strive for the highest standards in everything we do, from program design to implementation and evaluation."
          />
          <ValueCard 
            icon={<Users className="text-red-500" size={28} />}
            title="Collaboration"
            description="We believe in the power of partnerships and work closely with communities, governments, and other organizations."
          />
          <ValueCard 
            icon={<Globe className="text-blue-500" size={28} />}
            title="Sustainability"
            description="We design our programs to create lasting impact by building local capacity and fostering self-sufficiency."
          />
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-4 bg-gray-100 dark:bg-gray-700 w-14 h-14 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default Values;