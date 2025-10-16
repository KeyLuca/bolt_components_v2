import { useState, useEffect } from 'react';
import { List } from 'lucide-react';

export function TableOfContents() {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'hero', label: 'Hero Section' },
    { id: 'text-animations', label: 'Text Animations' },
    { id: 'media-split', label: 'Media Split' },
    { id: 'kpis', label: 'KPI Dashboard' },
    { id: 'tabs', label: 'Tab Navigation' },
    { id: 'accordion', label: 'FAQ Accordion' },
    { id: 'items', label: 'Feature List' },
    { id: 'key-value', label: 'Company Info' },
    { id: 'table', label: 'Data Table' },
    { id: 'search', label: 'Search & Filters' },
    { id: 'form', label: 'Contact Form' },
    { id: 'map', label: 'Locations Map' },
    { id: 'pricing', label: 'Pricing Plans' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
  };

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <List className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">
              Page Navigation
            </h2>
          </div>
          <p className="text-lg text-slate-300">
            Quick links to all sections
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(section.id)}
              className={`px-6 py-4 rounded-lg font-medium text-left transition-all ${
                activeSection === section.id
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              <span className="text-sm text-slate-400 mr-2">
                {String(index + 1).padStart(2, '0')}
              </span>
              {section.label}
            </button>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">13</div>
              <div className="text-sm text-slate-300">Sections</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">40+</div>
              <div className="text-sm text-slate-300">Components</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-slate-300">Interactive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
