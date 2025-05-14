import { BookOpen, Users, GraduationCap, Lightbulb } from 'lucide-react';

const Programs = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Our Programs
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            We offer comprehensive educational programs designed to address the unique needs of each community we serve.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProgramCard 
            icon={<BookOpen className="text-red-500" size={28} />}
            title="School Support"
            description="We provide resources, materials, and infrastructure support to schools in underserved communities."
          />
          <ProgramCard 
            icon={<Users className="text-blue-500" size={28} />}
            title="Teacher Training"
            description="We equip teachers with modern pedagogical skills to enhance learning outcomes for students."
          />
          <ProgramCard 
            icon={<GraduationCap className="text-red-500" size={28} />}
            title="Scholarship Program"
            description="We offer scholarships to promising students who lack financial resources to continue their education."
          />
          <ProgramCard 
            icon={<Lightbulb className="text-blue-500" size={28} />}
            title="Digital Literacy"
            description="We bridge the digital divide by providing technology education and resources to communities."
          />
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ 
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

export default Programs;