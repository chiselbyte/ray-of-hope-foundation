"use client";

const Map = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-2 overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986682646222!3d40.697149421542055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1625234957760!5m2!1sen!2s" 
        width="100%" 
        height="300" 
        style={{ border: 0 }} 
        allowFullScreen={false} 
        loading="lazy"
        aria-label="Map showing our location"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default Map;