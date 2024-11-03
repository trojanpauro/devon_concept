import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

interface VisitCardProps {
  farmName: string;
  date: string;
  location: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

const VisitCard: React.FC<VisitCardProps> = ({ farmName, date, location, status }) => {
  const statusColors = {
    scheduled: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{farmName}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
      </div>
    </div>
  );
};

export default VisitCard;