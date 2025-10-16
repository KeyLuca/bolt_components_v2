import { useState } from 'react';

export function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Klasse A',
      title: 'Führerschein Klasse A',
      content: 'Die Klasse A berechtigt zum Führen von Krafträdern mit einem Hubraum von mehr als 50 cm³ und einer bauartbedingten Höchstgeschwindigkeit von mehr als 45 km/h. Dazu gehören Motorräder, Motorroller und dreirädrige Kraftfahrzeuge.'
    },
    {
      label: 'Klasse B',
      title: 'Führerschein Klasse B',
      content: 'Die Klasse B berechtigt zum Führen von Kraftfahrzeugen mit einer zulässigen Gesamtmasse von nicht mehr als 3.500 kg und nicht mehr als 8 Sitzplätzen außer dem Fahrersitz. Dazu gehören PKW, Wohnmobile und leichte LKW.'
    },
    {
      label: 'Klasse C',
      title: 'Führerschein Klasse C',
      content: 'Die Klasse C berechtigt zum Führen von Lastkraftwagen mit einer zulässigen Gesamtmasse von mehr als 3.500 kg. Dazu gehören LKW, Sattelzugmaschinen und andere schwere Nutzfahrzeuge.'
    },
    {
      label: 'Klasse D',
      title: 'Führerschein Klasse D',
      content: 'Die Klasse D berechtigt zum Führen von Kraftomnibussen mit mehr als 8 Fahrgastplätzen. Dazu gehören Reisebusse, Linienbusse und andere Omnibusse für den Personentransport.'
    },
    {
      label: 'Klasse L&T',
      title: 'Führerschein Klasse L&T',
      content: 'Die Klasse L berechtigt zum Führen von Zugmaschinen mit einer Höchstgeschwindigkeit von nicht mehr als 40 km/h. Die Klasse T berechtigt zum Führen von land- oder forstwirtschaftlichen Zugmaschinen.'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Führerschein Klassen
          </h2>
          <p className="text-lg text-slate-600">
            Erfahren Sie mehr über die verschiedenen Führerschein-Klassen
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-blue-200">
          {tabs.map((tab, index) => {
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
                {tab.label}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl p-12 min-h-[300px]">
          <h3 className="text-3xl font-bold text-slate-900 mb-4">
            {tabs[activeTab].title}
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            {tabs[activeTab].content}
          </p>
        </div>
      </div>
    </section>
  );
}
