import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      target: "Para pequenos negócios iniciando com dados.",
      price: "350",
      features: [
        "Dashboard simples",
        "1 relatório automático",
        "Suporte por email"
      ],
      recommended: false
    },
    {
      name: "Pro",
      target: "Para empresas em crescimento.",
      price: "750",
      features: [
        "Dashboards personalizados",
        "Relatórios automáticos ilimitados",
        "1 automação complexa com n8n",
        "Suporte prioritário via WhatsApp"
      ],
      recommended: true
    },
    {
      name: "Premium",
      target: "Solução completa.",
      price: "1.500",
      features: [
        "Consultoria estratégica mensal",
        "Dashboards avançados",
        "Automação completa de processos",
        "Gerenciamento de múltiplos sistemas",
        "Suporte dedicado"
      ],
      recommended: false
    }
  ];

  return (
    <section id="planos" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Planos transparentes e acessíveis
          </h2>
          <p className="text-lg text-slate-400">
            Escolha o plano ideal para o momento da sua empresa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.recommended 
                  ? 'bg-slate-800 border-2 border-cyan-500 shadow-2xl shadow-cyan-900/20' 
                  : 'bg-slate-950 border border-slate-800'
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-500 text-white text-sm font-bold rounded-full">
                  Recomendado
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.target}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-slate-400">R$</span>
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">/mês</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-cyan-400 shrink-0" />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                plan.recommended
                  ? 'bg-cyan-500 text-white hover:bg-cyan-600'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}>
                Escolher Plano
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
