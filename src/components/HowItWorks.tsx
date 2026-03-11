import { motion } from 'motion/react';

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Conectamos seus dados",
      desc: "Integramos suas planilhas, sistemas de gestão (ERP/CRM) ou bancos de dados de forma segura."
    },
    {
      num: "2",
      title: "Criamos dashboards e automações",
      desc: "Organizamos os dados brutos, construímos painéis visuais e automatizamos processos repetitivos."
    },
    {
      num: "3",
      title: "Você toma decisões melhores",
      desc: "Acesse informações claras e atualizadas em tempo real para guiar o crescimento da sua empresa."
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Como Funciona
          </h2>
          <p className="text-lg text-slate-400">
            Nosso modelo SaaS simplifica a adoção de tecnologia em três passos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-slate-800" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center"
            >
              <div className="w-24 h-24 mx-auto bg-slate-950 border-2 border-cyan-500 rounded-full flex items-center justify-center text-3xl font-bold text-cyan-400 mb-6 relative z-10 shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
