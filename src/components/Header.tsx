import { Heart, Home, Calendar, Info } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Communion</span>
            </Link>
          </div>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/') ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              Home
            </Link>
            
            <Link
              to="/events"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/events') ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Calendar className="h-5 w-5 mr-1" />
              Events
            </Link>
            
            <Link
              to="/about"
              className={`flex items-center px-3 py-2 text-sm font-medium ${
                isActive('/about') ? 'text-purple-600' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Info className="h-5 w-5 mr-1" />
              About
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}