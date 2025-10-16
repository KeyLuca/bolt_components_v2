import { useState } from 'react';
import { Upload, Calendar, Check } from 'lucide-react';

interface FormSectionProps {
  onToast: (message: string, type: 'success' | 'error') => void;
}

export function FormSection({ onToast }: FormSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: '',
    date: '',
    subscribe: false,
    file: null as File | null
  });

  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onToast('Form submitted successfully!', 'success');
      setFormData({
        name: '',
        email: '',
        category: '',
        message: '',
        date: '',
        subscribe: false,
        file: null
      });
    }, 1500);
  };

  const handleFileChange = (file: File | null) => {
    if (file && file.size > 5000000) {
      onToast('File size must be less than 5MB', 'error');
      return;
    }
    setFormData({ ...formData, file });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileChange(file);
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600">
            Fill out the form below and we'll get back to you
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-blue-50 rounded-2xl p-8 space-y-6 border border-slate-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Category *
            </label>
            <select
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
            >
              <option value="">Select a category</option>
              <option value="general">General Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="sales">Sales</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Preferred Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
              />
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Message *
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
              placeholder="Tell us more about your inquiry..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Attachment
            </label>
            <div
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300'
              }`}
            >
              {formData.file ? (
                <div className="flex items-center justify-center gap-2 text-slate-700">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span className="font-medium">{formData.file.name}</span>
                  <button
                    type="button"
                    onClick={() => handleFileChange(null)}
                    className="text-red-600 hover:text-red-700 ml-2"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <>
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                  <p className="text-slate-600 mb-2">
                    Drag and drop your file here, or
                  </p>
                  <label className="text-blue-600 font-semibold cursor-pointer hover:text-blue-700">
                    browse files
                    <input
                      type="file"
                      onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                      className="hidden"
                      accept="image/*,.pdf,.doc,.docx"
                    />
                  </label>
                  <p className="text-sm text-slate-500 mt-2">
                    Max file size: 5MB
                  </p>
                </>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="subscribe"
              checked={formData.subscribe}
              onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
              className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor="subscribe" className="text-slate-700">
              Subscribe to our newsletter for updates
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? 'Submitting...' : 'Submit Form'}
            </button>
            <button
              type="button"
              onClick={() => {
                setFormData({
                  name: '',
                  email: '',
                  category: '',
                  message: '',
                  date: '',
                  subscribe: false,
                  file: null
                });
              }}
              className="px-8 py-4 border border-slate-300 rounded-lg font-semibold text-slate-700 hover:bg-gray-100 transition-colors"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
