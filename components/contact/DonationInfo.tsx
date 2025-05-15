const DonationInfo = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Donation Details - A RAY OF HOPE CHARITABLE TRUST</h2>

      <div className="space-y-4 text-gray-900 dark:text-white">
        <p>Donate Used Clothes, Stationery Items, Grocery, Electronic Items, etc.</p>
        <p className="text-pink-500 font-semibold">50% Tax Benefit!!</p>

        <h3 className="text-lg font-semibold mt-4">Sponsor Child Education!</h3>
        <p>Basic Education (Rs. 3,100/-)</p>
        <p>One-Time Support (Rs. 36,001/-)</p>
        <p>Students become experts in <strong>Maths, Science, English & Social Study.</strong></p>

        <h3 className="text-lg font-semibold mt-4">Technical Education & Job Placement (Rs. 50,000/-)</h3>
        <p>Includes Banner Design, Video Editing, Digital Marketing, Website & Application Development.</p>

        <h3 className="text-lg font-semibold mt-4 text-red-600">100% Donation Transparency!!</h3>
        <ul className="list-disc ml-5">
          <li>Child details along with progress report shared every 3 months.</li>
          <li>Meet the child face to face & get 50% tax benefit on the donated amount.</li>
        </ul>

        <p className="mt-4 font-semibold">Free Education for Needy & Helpless Children</p>
        <p>IIT / Medical (NEET) / IAS Preparation Support</p>

        <p className="mt-4 font-semibold">Donate via G Pay / Phone Pay: <span className="text-red-600">9730255167</span></p>

        <p className="mt-4 font-semibold">PAN: AAHTA8428R</p>
        <p>REG NO: F - 56297</p>
        <p>80G: AAHTA8428RF20211</p>

        <p className="mt-4 font-semibold">Website: <a href="https://www.arayofhope.org.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.arayofhope.org.in</a></p>
        <p>Instagram: <a href="https://www.instagram.com/arohedu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@arohedu</a></p>

        <div className="mt-6">
          <img 
            src="/images/donate.jpg" 
            alt="Donate" 
            className="rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default DonationInfo;