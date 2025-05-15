"use client";

const Map = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-2 overflow-hidden">
      <iframe
        src="https://www.google.com/maps?q=B4+Safa+Complex+Sheikh+Wasti+Lane+2+Below+Meridian+Icecream+Parlour+Wakad+Pune+411057+Maharashtra&output=embed"
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