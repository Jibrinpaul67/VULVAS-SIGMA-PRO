
import Image from 'next/image';

const SupportChannels = () => {
  return (
    <div  id="features"  className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
        Support Channels
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Email */}
        <div className="flex items-start gap-4 p-4 border rounded-lg">
          <Image
            src="/inbox.svg"
            alt="Email Support"
            width={150}
            height={150}
          />
          <div>
            <h3 className="text-lg font-bold text-black">Need Assistance?</h3>
            <p className="text-black font-medium">Send us an Email</p>
            <p className="text-gray-600 text-sm">Watch it shows.</p>
            <a
              href="mailto:support@vulas.com"
              className="text-blue-600 hover:underline text-sm"
            >
              Go
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4 p-4 border rounded-lg">
          <Image
            src="/videocall.svg"
            alt="Phone Support"
            width={150}
            height={150}
          />
          <div>
            <h3 className="text-lg font-bold text-black">Talk to an Expert</h3>
            <p className="text-black font-medium">Call Now</p>
            <p className="text-gray-600 text-sm">Available during business hours</p>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:underline text-sm"
            >
              Go
            </a>
          </div>
        </div>

        {/* Another Phone */}
        <div className="flex items-start gap-4 p-4 border rounded-lg">
          <Image
            src="/businesscall.svg"
            alt="Quick Call"
             width={150}
            height={150}
          />
          <div>
            <h3 className="text-lg font-bold text-black">Find Answers Faster</h3>
            <p className="text-black font-medium">Call Now</p>
            <p className="text-gray-600 text-sm">Available during business hours</p>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:underline text-sm"
            >
              Go
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="flex items-start gap-4 p-4 border rounded-lg">
          <Image
            src="/form.svg"
            alt="Support Form"
             width={150}
            height={150}
          />
          <div>
            <h3 className="text-lg font-bold text-black">Support Request Form</h3>
            <p className="text-black font-medium">Submit a Request</p>
            <p className="text-gray-600 text-sm"></p>
            <a
              href="#contact-form"
              className="text-blue-600 hover:underline text-sm"
            >
              Go
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SupportChannels;






















