const reviews = [
  {
    name: "Chinedu Okafor",
    review: "VULAS Security has completely transformed my online safety. I feel much more secure knowing my devices are protected!",
    role: "IT Manager"
  },
  {
    name: "Steven Osonuga",
    review: "Easy to use and highly effective. I highly recommend this security solution for anyone serious about cybersecurity.",
    role: "Cyber Security Specialist"
  },
  {
    name: "Jibrin-Paul Esther",
    review: "Fast, reliable, and efficient! The best security tool I have used so far.",
    role: "Software Developer"
  },
];


const ReviewComponent = () => {
  return (
    <div className="py-8 sm:py-12 px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">
        Trusted by Thousands of Users
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
          >
            <div className="flex-1">
              <div className="text-blue-600 text-5xl font-serif mb-4">&quot;</div>
              <p className="text-gray-600 text-base sm:text-lg mb-6">
                {review.review}
              </p>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-800">{review.name}</p>
              <p className="text-sm text-gray-500">{review.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default ReviewComponent;