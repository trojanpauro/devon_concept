import React from 'react';
import { Users, Building2, Bell, Shield } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your farm settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Farm Management</h2>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Farm Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Location</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Livestock Types</label>
              <div className="mt-2 space-y-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                  <span className="ml-2">Poultry</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
                  <span className="ml-2">Piggery</span>
                </label>
              </div>
            </div>
            <button type="submit" className="btn">Save Farm Settings</button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Users className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">User Management</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium">John Doe</p>
                <p className="text-sm text-gray-500">Farm Manager</p>
              </div>
              <button className="text-indigo-600 hover:text-indigo-900">Edit</button>
            </div>
            <button className="btn w-full">Add New User</button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Email Notifications</span>
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">SMS Alerts</span>
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-gray-700">Daily Reports</span>
              <input type="checkbox" className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </label>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-indigo-600" />
            <h2 className="text-lg font-semibold">Security</h2>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>
            <button type="submit" className="btn">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;