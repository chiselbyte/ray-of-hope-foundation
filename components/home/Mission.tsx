import Image from 'next/image';

const Mission = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              As we know many children’s are not able to get Good quality Education due to lack of money or family problems. so we started organisation  A RAY OF HOPE   which helps needy & poor children’s   with world class education. To provide Advanced Technical Education like C , C++ , Java , Python , Database , Html ,CSS , Digital Marketing , Artificial Intelligence Robotics etc to Underprivileged and Poor Children.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              By partnering with local organizations and governments, we create sustainable educational ecosystems that empower children and communities to build better futures.
            </p>
            <div className="flex flex-wrap gap-4">
              <MissionStat number="10" text="States" />
              <MissionStat number="35" text="Projects" />
              <MissionStat number="65" text="Villages & Slums" />
              <MissionStat number="20K+" text="Happy Faces" />
            </div>
          </div>
          <div className="order-1 md:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg"
              alt="Students learning in a classroom"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const MissionStat = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg py-3 px-5">
      <p className="font-bold text-xl text-blue-600 dark:text-blue-400">{number}</p>
      <p className="text-gray-600 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default Mission;