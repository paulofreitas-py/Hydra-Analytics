import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    "Clareza nos dados",
    "Menos trabalho manual",
    "Decisões baseadas em informação",
    "Integração entre sistemas",
    "Automação de tarefas repetitivas",
    "Crescimento mais eficiente"
  ];

  return (
    <section className="py-24 bg-slate-950 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefícios reais para o seu dia a dia
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Não entregamos apenas tecnologia, entregamos impacto real na forma como você gerencia e expande seu negócio.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square md:aspect-auto md:h-[400px] rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-8 flex items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/analytics/800/800')] opacity-20 mix-blend-overlay bg-cover bg-center" />
               <div className="relative z-10 text-center">
                 <div className="text-5xl font-bold text-white mb-2">+40h</div>
                 <div className="text-cyan-400 font-medium">Economizadas por mês em média</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
