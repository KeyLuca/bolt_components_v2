import { Check, Star } from 'lucide-react';

export function PricingCards() {
  const plans = [
    {
      name: 'Starter',
      price: '29',
      description: 'Perfect for individuals',
      features: [
        'Up to 10 projects',
        '5GB storage',
        'Basic analytics',
        'Email support',
        'Community access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '79',
      description: 'For growing teams',
      features: [
        'Unlimited projects',
        '50GB storage',
        'Advanced analytics',
        'Priority support',
        'Team collaboration',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '199',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Unlimited storage',
        'Dedicated support',
        'SLA guarantee',
        'Advanced security',
        'Custom contracts',
        'Training sessions'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-slate-600">
            Simple, transparent pricing that grows with you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-blue-50 rounded-2xl p-8 transition-all hover:scale-105 ${
                plan.popular
                  ? 'border-2 border-blue-600 shadow-2xl'
                  : 'border border-blue-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-slate-900">
                    ${plan.price}
                  </span>
                  <span className="text-slate-600">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}
