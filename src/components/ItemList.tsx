import { useState } from 'react';
import { Clock, TrendingUp, Star, Award } from 'lucide-react';

export function ItemList() {
  const [visibleItems, setVisibleItems] = useState(6);

  const items = [
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      category: 'Analytics',
      color: 'blue'
    },
    {
      icon: Star,
      title: 'Premium Features',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.',
      category: 'Features',
      color: 'cyan'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
      category: 'Recognition',
      color: 'teal'
    },
    {
      icon: Clock,
      title: 'Time Saving',
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
      category: 'Efficiency',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      title: 'Growth Metrics',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
      category: 'Analytics',
      color: 'blue'
    },
    {
      icon: Star,
      title: 'Customer Favorites',
      description: 'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
      category: 'Features',
      color: 'cyan'
    },
    {
      icon: Award,
      title: 'Industry Leader',
      description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
      category: 'Recognition',
      color: 'teal'
    },
    {
      icon: Clock,
      title: 'Quick Setup',
      description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
      category: 'Efficiency',
      color: 'emerald'
    }
  ];

  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Discover Our Features
          </h2>
          <p className="text-lg text-slate-600">
            Comprehensive solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {items.slice(0, visibleItems).map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              cyan: 'from-cyan-500 to-cyan-600',
              teal: 'from-teal-500 to-teal-600',
              emerald: 'from-emerald-500 to-emerald-600'
            };

            return (
              <div
                key={index}
                className="bg-white border border-blue-200 rounded-xl p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {visibleItems < items.length && (
          <div className="text-center">
            <button
              onClick={() => setVisibleItems(items.length)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
