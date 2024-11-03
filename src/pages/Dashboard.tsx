import React from 'react';
import { Beef, Users, Activity, TrendingUp } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import VisitCard from '../components/dashboard/VisitCard';

function Dashboard() {
  const stats = [
    { title: 'Total Livestock', value: '2,547', icon: Beef, trend: { value: 12, isPositive: true } },
    { title: 'Active Farms', value: '85', icon: Users, trend: { value: 8, isPositive: true } },
    { title: 'Health Score', value: '94%', icon: Activity, trend: { value: 3, isPositive: true } },
    { title: 'Feed Efficiency', value: '1.8', icon: TrendingUp, trend: { value: 2, isPositive: false } },
  ];

  const upcomingVisits = [
    { farmName: 'Green Valley Ranch', date: '2024-03-15', location: 'Boulder, CO', status: 'scheduled' },
    { farmName: 'Highland Cattle Co', date: '2024-03-16', location: 'Fort Collins, CO', status: 'scheduled' },
    { farmName: 'Mountain View Farm', date: '2024-03-14', location: 'Denver, CO', status: 'completed' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Welcome to Devor Livestock Solutions</p>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h2>
            <div className="aspect-[2/1] bg-gray-50 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart placeholder - Will integrate with chart library</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Farm Visits</h2>
          <div className="space-y-4">
            {upcomingVisits.map((visit) => (
              <VisitCard
                key={visit.farmName}
                farmName={visit.farmName}
                date={visit.date}
                location={visit.location}
                status={visit.status as 'scheduled' | 'completed' | 'cancelled'}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;