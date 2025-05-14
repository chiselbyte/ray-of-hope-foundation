import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Address</h3>
            <p className="text-gray-600 dark:text-gray-400">
              123 Education Street<br />
              Cityville, State 12345<br />
              Country
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-4">
            <Phone className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
            <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              info@eduhope.org
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-4">
            <Clock className="h-5 w-5 text-red-600 dark:text-red-400" />
          </div>
          <div>
            <h3 className="text-md font-medium text-gray-900 dark:text-white">Office Hours</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Monday - Friday: 9am - 5pm<br />
              Saturday: 10am - 2pm<br />
              Sunday: Closed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;