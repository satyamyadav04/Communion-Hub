import { useState } from 'react';
import { format } from 'date-fns';
import { MapPin, Calendar as CalendarIcon } from 'lucide-react';
import type { Event } from '../types';

const INITIAL_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Interfaith Dialog Session',
    date: '2024-03-25',
    location: 'Community Center',
    description: 'Join us for an engaging discussion about different faith traditions.',
    category: 'Religious'
  },
  {
    id: '2',
    title: 'Community Picnic',
    date: '2024-03-30',
    location: 'Central Park',
    description: 'A social gathering to meet and connect with community members.',
    category: 'Social'
  },
  {
    id: '3',
    title: 'Food Drive',
    date: '2024-04-05',
    location: 'Local Food Bank',
    description: 'Help us collect and distribute food to those in need.',
    category: 'Charity'
  }
];

export default function Events() {
  const [events, setEvents] = useState<Event[]>(INITIAL_EVENTS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    description: '',
    category: 'Social' as Event['category']
  });

  const filteredEvents = selectedCategory === 'all'
    ? events
    : events.filter(event => event.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event: Event = {
      id: Date.now().toString(),
      ...newEvent
    };
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      date: '',
      location: '',
      description: '',
      category: 'Social'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Community Events</h2>
        <div className="flex space-x-4">
          {['all', 'Religious', 'Social', 'Charity'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <div className="flex items-center text-gray-500 mb-2">
                <CalendarIcon className="h-5 w-5 mr-2" />
                {format(new Date(event.date), 'MMMM d, yyyy')}
              </div>
              <div className="flex items-center text-gray-500">
                <MapPin className="h-5 w-5 mr-2" />
                {event.location}
              </div>
              <span className="mt-4 inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                {event.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Add New Event</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              required
              value={newEvent.title}
              onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              required
              value={newEvent.date}
              onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              required
              value={newEvent.location}
              onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              required
              value={newEvent.description}
              onChange={e => setNewEvent({ ...newEvent, description: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              value={newEvent.category}
              onChange={e => setNewEvent({ ...newEvent, category: e.target.value as Event['category'] })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            >
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}