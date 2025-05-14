import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    content: "Thanks to EduHope, I was able to finish my education and pursue my dream of becoming a teacher. Now I'm giving back to my community by teaching the next generation.",
    name: "Priya Sharma",
    role: "Former Student, Now Teacher",
    location: "Delhi, India",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  },
  {
    id: 2,
    content: "The teacher training program has completely transformed how I approach education. I've seen remarkable improvements in student engagement and academic outcomes in my classroom.",
    name: "Michael Okoye",
    role: "Primary School Teacher",
    location: "Lagos, Nigeria",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
  },
  {
    id: 3,
    content: "The digital literacy program brought technology to our community for the first time. My students now have access to a world of information that was previously inaccessible to them.",
    name: "Ana Rodriguez",
    role: "School Principal",
    location: "Lima, Peru",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg"
  },
  {
    id: 4,
    content: "The scholarship I received changed my life. I'm now studying computer science at university, something I never thought would be possible for me.",
    name: "David Kimani",
    role: "Scholarship Recipient",
    location: "Nairobi, Kenya",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    id: 5,
    content: "Partnering with EduHope has allowed us to reach more communities and make a bigger impact than we could have on our own. Their expertise and dedication are unmatched.",
    name: "Sarah Johnson",
    role: "Partner Organization Director",
    location: "London, UK",
    image: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg"
  },
  {
    id: 6,
    content: "Our village now has a proper school building with trained teachers. The children are learning and thriving in ways we never imagined possible before EduHope came to our community.",
    name: "Carlos Mendez",
    role: "Community Leader",
    location: "Antigua, Guatemala",
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg"
  }
];

const TestimonialsList = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  location: string;
  image: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
          </div>
        </div>
        
        <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
          "{testimonial.content}"
        </blockquote>
        
        <div className="text-sm text-right text-red-600 dark:text-red-400">
          {testimonial.location}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsList;