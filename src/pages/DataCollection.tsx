import React, { useState } from 'react';
import { Clipboard, PieChart, Droplet } from 'lucide-react';
import { LivestockType } from '../types/farm';

const DataCollection: React.FC = () => {
  const [selectedFarm, setSelectedFarm] = useState<string>('');
  const [selectedType, setSelectedType] = useState<LivestockType>('poultry');

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Data Collection</h1>
        <p className="mt-1 text-sm text-gray-500">Record and manage livestock data</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Select Farm</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  value={selectedFarm}
                  onChange={(e) => setSelectedFarm(e.target.value)}
                >
                  <option value="">Select a farm</option>
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
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clipboard className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Health Records</h2>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mortality Count</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Symptoms</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows={3} />
            </div>
            <button type="submit" className="btn w-full">Save Health Record</button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <PieChart className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Feed Records</h2>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Feed Type</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cost</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <button type="submit" className="btn w-full">Save Feed Record</button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-4">
            <Droplet className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Water Consumption</h2>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Consumption (L)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Quality Notes</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" rows={3} />
            </div>
            <button type="submit" className="btn w-full">Save Water Record</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;