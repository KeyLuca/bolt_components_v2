import { useState } from 'react';
import { Search, X } from 'lucide-react';

export function SearchAndFilters() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const allSuggestions = [
    'Analytics Dashboard',
    'User Management',
    'Payment Integration',
    'Security Settings',
    'API Documentation',
    'Performance Metrics',
    'Team Collaboration',
    'Data Export'
  ];

  const filterOptions = [
    'Analytics',
    'Security',
    'Performance',
    'Integration',
    'Documentation',
    'Management'
  ];

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value.length > 0) {
      setSuggestions(
        allSuggestions.filter(s =>
          s.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 5)
      );
    } else {
      setSuggestions([]);
    }
  };

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Find What You Need
          </h2>
          <p className="text-lg text-slate-600">
            Search and filter through our resources
          </p>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search for anything..."
                className="w-full pl-12 pr-12 py-4 border-2 border-slate-300 rounded-xl text-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSuggestions([]);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {suggestions.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setSuggestions([]);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-white transition-colors border-b border-slate-100 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <Search className="w-4 h-4 text-slate-400" />
                      <span className="text-slate-900">{suggestion}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-700 mb-3">
              Filter by category:
            </div>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((filter, index) => (
                <button
                  key={index}
                  onClick={() => toggleFilter(filter)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedFilters.includes(filter)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
                  }`}
                >
                  {filter}
                  {selectedFilters.includes(filter) && (
                    <X className="inline-block w-4 h-4 ml-1" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {(searchQuery || selectedFilters.length > 0) && (
            <div className="bg-white border border-blue-200 rounded-xl p-6">
              <div className="text-sm font-semibold text-slate-700 mb-2">
                Active filters:
              </div>
              <div className="text-slate-600">
                {searchQuery && <div>Search: "{searchQuery}"</div>}
                {selectedFilters.length > 0 && (
                  <div>Categories: {selectedFilters.join(', ')}</div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
