
export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  bgColor?: string;
  iconColor?: string;
}

export interface EventCardProps {
  title: string;
  description: string;
  date: string;
  location: string;
  status: 'upcoming' | 'past';
  type: 'event' | 'workshop' | 'seminar';
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}