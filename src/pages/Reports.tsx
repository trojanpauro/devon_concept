import React, { useState } from 'react';
import { BarChart, PieChart, TrendingUp, Download } from 'lucide-react';
import { LivestockType } from '../types/farm';

const Reports: React.FC = () => {
  const [selectedFarm, setSelectedFarm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<LivestockType>('poultry');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="mt-1 text-sm text-gray-500">View and analyze farm performance</p>
        </div>
        <button className="btn flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Farm</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={selectedFarm}
              onChange={(e) => setSelectedFarm(e.target.value)}
            >
              <option value="">All Farms</option>
              <option value="1">Green Valley Ranch</option>
              <option value="2">Highland Cattle Co</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Livestock Type</label>
            <select
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as LivestockType)}
            >
              <option value="poultry">Poultry</option>
              <option value="piggery">Piggery</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Start Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <BarChart className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Mortality Rate</h2>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Mortality Rate Chart</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Feed Consumption</h2>
            </div>
          </div>
          <div className="aspect-[16/9] bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Feed Consumption Chart</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold">Performance Metrics</h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Previous</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Feed Conversion Ratio</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.8</td>
                  <td className="px-6 py-4 whitespace-nowrap">1.9</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600">+5.3%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Mortality Rate</td>
                  <td className="px-6 py-4 whitespace-nowrap">2.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap">2.8%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-green-600">+25%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;