import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, trend }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-3 bg-indigo-50 rounded-full">
          <Icon className="w-6 h-6 text-indigo-600" />
        </div>
      </div>
      {trend && (
        <div className="mt-4">
          <span className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
          <span className="text-sm text-gray-500 ml-2">from last month</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;