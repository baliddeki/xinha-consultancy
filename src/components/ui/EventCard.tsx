import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { EventCardProps } from '../../types';

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  date,
  location,
  status,
  type
}) => {
  const statusColors = {
    upcoming: 'bg-blue-100 text-blue-800',
    past: 'bg-gray-100 text-gray-800'
  };

  const typeGradients = {
    event: 'from-blue-500 to-blue-600',
    workshop: 'from-green-500 to-green-600',
    seminar: 'from-purple-500 to-purple-600'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className={`h-48 bg-gradient-to-br ${typeGradients[type]} flex items-center justify-center`}>
        <div className="text-white text-center">
          <Calendar size={48} className="mx-auto mb-2" />
          <p className="text-sm opacity-90 capitalize">{type}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm capitalize ${statusColors[status]}`}>
            {status}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
