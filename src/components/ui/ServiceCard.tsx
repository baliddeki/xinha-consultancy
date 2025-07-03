import React from 'react';
import { ServiceCardProps } from '../../types';

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  bgColor = 'bg-blue-50',
  iconColor = 'bg-xinhai-blue'
}) => {
  return (
    <div className={`${bgColor} p-6 rounded-xl hover:shadow-md transition-shadow duration-300`}>
      <div className={`w-16 h-16 ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="text-sm text-gray-500 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
