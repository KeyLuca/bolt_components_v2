export function KeyValueSection() {
  const specs = [
    { key: 'Founded', value: '2024' },
    { key: 'Headquarters', value: 'San Francisco, CA' },
    { key: 'Employees', value: '500+' },
    { key: 'Countries', value: '45' },
    { key: 'Industry', value: 'Technology' },
    { key: 'Funding', value: 'Series B' },
    { key: 'Revenue', value: '$50M ARR' },
    { key: 'Customers', value: '10,000+' }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Company Overview
          </h2>
          <p className="text-lg text-slate-600">
            Key facts and figures
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="divide-y divide-slate-200">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="grid grid-cols-2 hover:bg-gray-100 transition-colors"
              >
                <div className="px-8 py-5 font-semibold text-slate-700">
                  {spec.key}
                </div>
                <div className="px-8 py-5 text-slate-900 font-medium">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
