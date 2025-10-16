import { useState } from 'react';

export function StandortSection() {
  const [activeTab, setActiveTab] = useState(0);

  const locations = [
    {
      label: 'Berlin',
      title: 'Standort Berlin',
      content: 'Unser Hauptstandort in Berlin bietet eine zentrale Lage mit exzellentem Zugang zu öffentlichen Verkehrsmitteln. Hier finden Sie unser größtes Büro mit allen Dienstleistungen.',
      address: 'Friedrichstraße 123, 10117 Berlin',
      phone: '+49 30 12345678',
      hours: 'Mo-Fr: 8:00-18:00, Sa: 9:00-14:00'
    },
    {
      label: 'München',
      title: 'Standort München',
      content: 'In München betreuen wir unsere Kunden im Herzen Bayerns. Unser Büro liegt zentral und ist optimal an das öffentliche Verkehrsnetz angebunden.',
      address: 'Maximilianstraße 45, 80539 München',
      phone: '+49 89 98765432',
      hours: 'Mo-Fr: 8:00-18:00, Sa: 9:00-14:00'
    },
    {
      label: 'Hamburg',
      title: 'Standort Hamburg',
      content: 'Unser Standort in Hamburg ist der ideale Anlaufpunkt für Kunden im Norden Deutschlands. Moderne Büroräume mit Blick auf die Elbe.',
      address: 'Jungfernstieg 1, 20354 Hamburg',
      phone: '+49 40 11223344',
      hours: 'Mo-Fr: 8:00-18:00, Sa: 9:00-14:00'
    },
    {
      label: 'Köln',
      title: 'Standort Köln',
      content: 'Im Rheinland erwartet Sie unser Kölner Büro mit persönlicher Betreuung und regionaler Expertise. Zentral gelegen am Dom.',
      address: 'Unter Fettenhennen 1, 50667 Köln',
      phone: '+49 221 44556677',
      hours: 'Mo-Fr: 8:00-18:00, Sa: 9:00-14:00'
    },
    {
      label: 'Frankfurt',
      title: 'Standort Frankfurt',
      content: 'Als Finanzmetropole bietet Frankfurt ideale Bedingungen für unser Büro. Hier betreuen wir internationale Kunden und Unternehmen.',
      address: 'Mainzer Landstraße 50, 60325 Frankfurt',
      phone: '+49 69 77889900',
      hours: 'Mo-Fr: 8:00-18:00, Sa: 9:00-14:00'
    }
  ];

  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Unsere Standorte
          </h2>
          <p className="text-lg text-slate-600">
            Finden Sie den nächstgelegenen Standort
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-blue-200">
          {locations.map((location, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all relative ${
                  activeTab === index
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {location.label}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
            <h4 className="font-semibold text-slate-900 mb-1 text-sm">Adresse</h4>
            <p className="text-slate-600 text-xs">{locations[activeTab].address}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
            <h4 className="font-semibold text-slate-900 mb-1 text-sm">Telefon</h4>
            <p className="text-slate-600 text-xs font-medium">{locations[activeTab].phone}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
            <h4 className="font-semibold text-slate-900 mb-1 text-sm">Öffnungszeiten</h4>
            <p className="text-slate-600 text-xs">{locations[activeTab].hours}</p>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-96 bg-slate-100 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-slate-600 font-medium">Google Maps Integration</p>
              <p className="text-slate-500 text-sm mt-1">
                Hier würde die Google Maps Karte für {locations[activeTab].label} angezeigt werden
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Route planen
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}