import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

export function KPISection() {
  const kpis = [
    {
      icon: Users,
      label: 'Active Users',
      value: '124.5K',
      change: '+12.5%',
      trend: 'up',
      color: 'blue'
    },
    {
      icon: DollarSign,
      label: 'Revenue',
      value: '$2.4M',
      change: '+23.1%',
      trend: 'up',
      color: 'emerald'
    },
    {
      icon: TrendingUp,
      label: 'Growth Rate',
      value: '34.8%',
      change: '+5.2%',
      trend: 'up',
      color: 'cyan'
    },
    {
      icon: Activity,
      label: 'Engagement',
      value: '89.2%',
      change: '+7.3%',
      trend: 'up',
      color: 'teal'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Real-Time Performance
          </h2>
          <p className="text-lg text-slate-600">
            Track your key metrics at a glance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            const colorClasses = {
              blue: 'from-blue-500 to-blue-600',
              emerald: 'from-emerald-500 to-emerald-600',
              cyan: 'from-cyan-500 to-cyan-600',
              teal: 'from-teal-500 to-teal-600'
            };

            return (
              <div
                key={index}
                className="bg-white backdrop-blur-sm border border-blue-200 rounded-2xl p-6 hover:bg-gray-50 transition-all hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorClasses[kpi.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm font-medium text-slate-600 mb-2">
                  {kpi.label}
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  {kpi.value}
                </div>
                <div className="flex items-center gap-1 text-sm text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="font-medium">{kpi.change}</span>
                  <span className="text-slate-600">vs last month</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
