import React from 'react';
import { ChevronRight, Building, Users, Calendar } from 'lucide-react';
import { Button, ServiceCard } from '../components/ui';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <Building className="text-white" size={24} />,
      title: "Company Registration",
      description: "Free company registration services with complete legal compliance and documentation for your business setup.",
      features: [
        "Business name registration",
        "Legal structure setup", 
        "Tax registration assistance",
        "Complete documentation"
      ]
    },
    {
      icon: <Users className="text-white" size={24} />,
      title: "Tax & Investment",
      description: "Professional tax services and investment consulting for sustainable business growth and compliance.",
      features: [
        "Tax planning strategies",
        "Investment consulting",
        "Financial reporting",
        "Compliance management"
      ]
    },
    {
      icon: <Calendar className="text-white" size={24} />,
      title: "Business Operations",
      description: "End-to-end business operations support with deep local market expertise and government cooperation.",
      features: [
        "Operational consulting",
        "Local market insights",
        "Government relations",
        "Strategic planning"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 transform rotate-45 opacity-30"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 transform rotate-45 opacity-20"></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-blue-300 transform rotate-45 opacity-25"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional
              <span className="text-xinhai-blue block lg:inline"> Consulting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Xinhai Consultancy is a professional consulting agency specializing in providing 
              comprehensive tax, investment, and business operation services for Chinese businesses in Uganda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary" 
                size="lg"
                icon={<ChevronRight size={20} />}
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive business solutions with deep local expertise and government cooperation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About Xinhai Consultancy
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  We are a professional consulting agency specializing in providing tax, investment, 
                  and business operation services for Chinese businesses establishing operations in Uganda.
                </p>
                <p>
                  Our team maintains deep cooperation with Ugandan government institutions and possesses 
                  the expertise to resolve complex business challenges effectively.
                </p>
                <p>
                  We are committed to providing professional and reliable solutions to help 
                  businesses establish compliant operations and achieve long-term, secure, 
                  and efficient development in the Ugandan market.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-xinhai-blue rounded-xl p-8 text-white relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-xinhai-blue-light transform rotate-45 opacity-50"></div>
                <h3 className="text-2xl font-bold mb-6">Why Choose Xinhai?</h3>
                <ul className="space-y-4">
                  {[
                    "Deep local market expertise",
                    "Strong government cooperation", 
                    "Comprehensive business solutions",
                    "Professional multilingual team",
                    "Proven track record of success"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <ChevronRight size={16} className="text-xinhai-blue-light" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;