import Image from 'next/image';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Executive Director',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    bio: 'Sarah has 15+ years of experience in education and international development.'
  },
  {
    name: 'David Chen',
    role: 'Program Director',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg',
    bio: 'David oversees the implementation of our educational programs worldwide.'
  },
  {
    name: 'Maria Rodriguez',
    role: 'Education Specialist',
    image: 'https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg',
    bio: 'Maria develops our curriculum and teacher training methodologies.'
  },
  {
    name: 'James Wilson',
    role: 'Partnerships Manager',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
    bio: 'James builds and maintains relationships with donors and partner organizations.'
  }
];

const Team = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Dedicated professionals working together to make quality education accessible to all.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMember = ({ 
  name, 
  role, 
  image, 
  bio 
}: { 
  name: string; 
  role: string; 
  image: string; 
  bio: string 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-red-600 dark:text-red-400 font-medium mb-3">{role}</p>
        <p className="text-gray-600 dark:text-gray-400">{bio}</p>
      </div>
    </div>
  );
};

export default Team;