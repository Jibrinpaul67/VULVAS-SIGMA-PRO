import Button from '@/app/components/ui/button';

const BenefitsSection = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black mb-6">
          Why Partner with VULAS?
        </h2>
      </div>

      <div className="space-y-4 mb-12">
        {[
          {
            benefit: "Monthly Incentives",
            description: "– Earn recurring rewards for successful referrals and sales."
          },
          {
            benefit: "Co-Marketing Opportunities",
            description: "– Get featured in joint webinars, workshops, and VULAS marketing campaigns."
          },
          {
            benefit: "Exclusive Access & Training",
            description: "– Gain early access to product updates, training sessions, and beta programs."
          },
          {
            benefit: "Pre-Sales Support",
            description: "– Receive expert assistance to help close deals and onboard new customers."
          },
          {
            benefit: "Post-Sales Support",
            description: "– Ensure customer satisfaction with dedicated technical and business support."
          },
          {
            benefit: "Sales Leads",
            description: "– Tap into a network of potential customers and business opportunities."
          },
          {
            benefit: "Online Support",
            description: "– Access 24/7 technical assistance and a dedicated partner helpdesk."
          },
          {
            benefit: "Marketing Strategies",
            description: "– Leverage proven marketing tools and strategies to expand your reach."
          }
        ].map((item, index) => (
          <div key={index} className="flex items-baseline">
            <span className="text-green-500 text-xl mr-3">✓</span>
            <div className="flex flex-wrap items-baseline">
              <h3 className="font-bold text-black mr-1">
                {item.benefit}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          className="bg-[#0052B4] text-white px-8 py-3 rounded-full hover:bg-[#003D82] transition-colors"
        >
          Become a Partner
        </Button>
      </div>
    </div>
  );
};

export default BenefitsSection;