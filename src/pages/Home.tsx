import { useNavigate } from 'react-router-dom';
import { Users, Heart, Handshake } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Connecting People Across</span>
            <span className="block text-purple-600">Faiths & Interests</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Join our vibrant community where people of all faiths come together to share experiences,
            support each other, and create meaningful connections.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/events')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
              >
                Explore Events
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Community Building</h3>
              <p className="mt-2 text-base text-gray-500">
                Create meaningful connections with people who share your values and interests.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Heart className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Inclusive Environment</h3>
              <p className="mt-2 text-base text-gray-500">
                A welcoming space for people of all faiths and backgrounds.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Handshake className="h-12 w-12 text-purple-600" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Support Network</h3>
              <p className="mt-2 text-base text-gray-500">
                Find and offer support within our caring community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}