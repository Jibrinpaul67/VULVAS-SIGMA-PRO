import Image from 'next/image';

const TeamSection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">Meet us</h2>
      <p className="text-black mb-8 text-lg">Meet the experts behind building your Vision</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div key={num} className="aspect-square">
            <Image 
              src={`/team${num}.png`}
              alt={`Team member ${num}`}
              width={400}
              height={400}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      
      <p className="text-center mt-12 text-black italic">
        Keeping people safe & secure around the world
      </p>
    </div>
  );
};

export default TeamSection;