import React from 'react';
import { Calendar, Users, Building } from 'lucide-react';
import { EventCard } from '../components/ui';

const EventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: "Uganda-China Business Networking Summit",
      description: "Join us for an exclusive networking event connecting Chinese businesses in Uganda with local partners, government officials, and industry leaders.",
      date: "July 15, 2025",
      location: "Kampala Serena Hotel",
      status: 'upcoming' as const,
      type: 'event' as const
    },
    {
      title: "Tax Compliance Workshop 2025",
      description: "Comprehensive workshop covering Uganda's updated tax system and compliance requirements specifically designed for Chinese business owners.",
      date: "August 2, 2025", 
      location: "Nakawa Business Center",
      status: 'upcoming' as const,
      type: 'workshop' as const
    },
    {
      title: "Investment Opportunities Seminar",
      description: "Explore emerging investment opportunities in Uganda's key growth sectors including agriculture, manufacturing, and renewable energy.",
      date: "August 20, 2025",
      location: "Imperial Royale Hotel",
      status: 'upcoming' as const,
      type: 'seminar' as const
    }
  ];

  const pastEvents = [
    {
      icon: <Calendar className="text-blue-600" size={24} />,
      title: "Annual Uganda-China Business Forum",
      description: "Successfully brought together over 200 Chinese investors and Ugandan entrepreneurs to explore collaboration opportunities across multiple sectors.",
      date: "March 2025",
      participants: "200+ attendees"
    },
    {
      icon: <Users className="text-green-600" size={24} />,
      title: "Legal Framework Workshop",
      description: "Comprehensive training on Uganda's legal framework for foreign businesses, covering registration processes and ongoing compliance requirements.",
      date: "January 2025", 
      participants: "150+ business owners"
    },
    {
      icon: <Building className="text-purple-600" size={24} />,
      title: "Market Entry Strategy Session",
      description: "Interactive workshop focusing on effective market entry strategies for Chinese businesses looking to establish operations in East Africa.",
      date: "November 2024",
      participants: "120+ entrepreneurs"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Company Events & Workshops
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay connected with our community through networking events, educational workshops, 
            and business development seminars designed for Chinese entrepreneurs in Uganda
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Mark your calendar for these valuable networking and learning opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
                status={event.status}
                type={event.type}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Past Events</h2>
            <p className="text-lg text-gray-600">
              Highlights from our recent successful events and workshops
            </p>
          </div>
          
          <div className="space-y-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    {event.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mt-2 lg:mt-0">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users size={16} />
                          {event.participants}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-xinhai-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Stay Updated on Our Events
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Subscribe to our newsletter to receive early notifications about upcoming events, 
            workshops, and exclusive business networking opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-xinhai-blue px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
