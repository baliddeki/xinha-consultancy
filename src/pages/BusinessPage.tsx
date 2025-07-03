import React from 'react';
import { Building, Users, Calendar, Shield, TrendingUp, Globe } from 'lucide-react';
import { ServiceCard } from '../components/ui';

const BusinessesPage: React.FC = () => {
  const businessServices = [
    {
      icon: <Building className="text-white" size={32} />,
      title: "Company Registration",
      description: "Complete company registration services including legal documentation, compliance setup, and business licensing with government cooperation.",
      features: [
        "Business name registration",
        "Legal structure setup",
        "Tax registration assistance", 
        "Licensing and permits"
      ],
      bgColor: "bg-blue-50",
      iconColor: "bg-xinhai-blue"
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: "Tax Advisory Services",
      description: "Professional tax planning and compliance services to ensure your business meets all regulatory requirements efficiently.",
      features: [
        "Tax planning strategies",
        "Compliance management",
        "Financial reporting assistance",
        "Audit support services"
      ],
      bgColor: "bg-green-50",
      iconColor: "bg-green-600"
    },
    {
      icon: <TrendingUp className="text-white" size={32} />,
      title: "Investment Consulting",
      description: "Strategic investment guidance and market analysis to help you make informed business decisions in the Ugandan market.",
      features: [
        "Market analysis and research",
        "Investment strategy development",
        "Risk assessment and management",
        "Portfolio optimization"
      ],
      bgColor: "bg-purple-50", 
      iconColor: "bg-purple-600"
    },
    {
      icon: <Calendar className="text-white" size={32} />,
      title: "Business Operations",
      description: "Comprehensive operational support including HR management, supply chain optimization, and process improvement consulting.",
      features: [
        "HR management solutions",
        "Supply chain optimization",
        "Process improvement consulting",
        "Quality assurance systems"
      ],
      bgColor: "bg-orange-50",
      iconColor: "bg-orange-600"
    },
    {
      icon: <Shield className="text-white" size={32} />,
      title: "Legal Compliance",
      description: "Ensure your business operates within Uganda's legal framework with our comprehensive compliance management services.",
      features: [
        "Legal documentation review",
        "Regulatory compliance monitoring",
        "Contract management support",
        "Dispute resolution assistance"
      ],
      bgColor: "bg-red-50",
      iconColor: "bg-red-600"
    },
    {
      icon: <Globe className="text-white" size={32} />,
      title: "Market Entry Strategy",
      description: "Strategic market entry consulting specifically designed to help Chinese businesses successfully establish operations in Uganda.",
      features: [
        "Comprehensive market research",
        "Entry strategy development",
        "Local partnership facilitation",
        "Cultural adaptation guidance"
      ],
      bgColor: "bg-teal-50",
      iconColor: "bg-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Business Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional services tailored specifically for Chinese businesses establishing 
            and growing their operations in Uganda's dynamic market
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                bgColor={service.bgColor}
                iconColor={service.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-xinhai-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Business Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let our experienced team guide you through every step of establishing 
            your business in Uganda. From registration to operations, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-xinhai-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-xinhai-blue transition-colors font-medium">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessesPage;
