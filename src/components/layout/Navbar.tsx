import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Beef, Calendar, Database, BarChart, FileText, Settings } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: <BarChart className="w-5 h-5" />, path: '/' },
    { name: 'Farm Visits', icon: <Calendar className="w-5 h-5" />, path: '/farm-visits' },
    { name: 'Data Collection', icon: <Database className="w-5 h-5" />, path: '/data-collection' },
    { name: 'Reports', icon: <FileText className="w-5 h-5" />, path: '/reports' },
    { name: 'Settings', icon: <Settings className="w-5 h-5" />, path: '/settings' },
  ];

  const isActivePath = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center gap-2 text-white">
                <Beef className="h-8 w-8" />
                <span className="font-bold text-xl">Devor Livestock</span>
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`${
                      isActivePath(item.path)
                        ? 'bg-indigo-700 text-white'
                        : 'text-white hover:bg-indigo-500'
                    } px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2`}
                  >
                    {item.icon}
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  isActivePath(item.path)
                    ? 'bg-indigo-700 text-white'
                    : 'text-white hover:bg-indigo-500'
                } block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2`}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;