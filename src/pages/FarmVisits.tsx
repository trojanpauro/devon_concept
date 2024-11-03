import React, { useState } from 'react';
import { Calendar as CalendarIcon, Plus, Filter } from 'lucide-react';
import { Visit } from '../types/farm';

const FarmVisits: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<Visit['status'] | 'all'>('all');

  const visits: Visit[] = [
    {
      id: '1',
      farmId: '1',
      date: '2024-03-15',
      type: 'routine',
      notes: 'Regular health checkup',
      status: 'scheduled',
    },
    // Add more mock data as needed
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Farm Visits</h1>
        <button className="btn flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Schedule Visit
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <select
                className="pl-10 pr-4 py-2 border rounded-md appearance-none bg-white"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as Visit['status'] | 'all')}
              >
                <option value="all">All Status</option>
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-gray-400" />
            <input
              type="date"
              className="border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Farm
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Notes
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {visits.map((visit) => (
                <tr key={visit.id}>
                  <td className="px-6 py-4 whitespace-nowrap">Farm Name</td>
                  <td className="px-6 py-4 whitespace-nowrap">{visit.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap capitalize">{visit.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium
                      ${visit.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                      ${visit.status === 'scheduled' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${visit.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                    `}>
                      {visit.status.charAt(0).toUpperCase() + visit.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">{visit.notes}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FarmVisits;