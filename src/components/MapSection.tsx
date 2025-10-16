import { MapPin } from 'lucide-react';

export function MapSection() {
  const locations = [
    { name: 'San Francisco', address: '123 Market Street, CA 94103', phone: '+1 (415) 555-0123' },
    { name: 'New York', address: '456 Broadway, NY 10013', phone: '+1 (212) 555-0456' },
    { name: 'London', address: '789 Oxford Street, W1D 2HG', phone: '+44 20 7946 0789' }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-slate-600">
            Find us around the world
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {location.name}
              </h3>
              <p className="text-slate-600 mb-2">{location.address}</p>
              <p className="text-blue-600 font-medium">{location.phone}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-200 via-cyan-200 to-teal-200 rounded-2xl h-96 relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-2">
              <MapPin className="w-16 h-16 text-slate-700 mx-auto mb-4" />
              <div className="text-2xl font-bold text-slate-900">Interactive Map</div>
              <div className="text-slate-600">Map visualization placeholder</div>
            </div>
          </div>

          <div className="absolute top-20 left-20 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute top-32 right-32 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
          <div className="absolute bottom-24 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
        </div>
      </div>
    </section>
  );
}
