import { motion } from 'motion/react';
import { LayoutDashboard, FileText, Workflow, Lightbulb } from 'lucide-react';

export default function Solution() {
  const services = [
    {
      icon: LayoutDashboard,
      title: "Dashboards Inteligentes",
      desc: "Visualize indicadores importantes do seu negócio em painéis claros e intuitivos desenvolvidos em Power BI.",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10"
    },
    {
      icon: FileText,
      title: "Relatórios Automáticos",
      desc: "Relatórios atualizados automaticamente via SQL e DAX, eliminando tarefas manuais e erros.",
      color: "text-blue-400",
      bg: "bg-blue-400/10"
    },
    {
      icon: Workflow,
      title: "Automação de Processos",
      desc: "Integração entre sistemas e fluxos automatizados com n8n que economizam tempo da sua equipe.",
      color: "text-indigo-400",
      bg: "bg-indigo-400/10"
    },
    {
      icon: Lightbulb,
      title: "Consultoria em Dados",
      desc: "Estratégia especializada para ajudar você a transformar dados brutos em decisões inteligentes.",
      color: "text-purple-400",
      bg: "bg-purple-400/10"
    }
  ];

  return (
    <section id="solucoes" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transformamos dados em clareza e eficiência
          </h2>
          <p className="text-lg text-slate-400">
            Combinamos ferramentas modernas de Business Intelligence e automação para ajudar empresas a organizar dados, reduzir trabalho manual e enxergar oportunidades.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-8 transition-all hover:shadow-xl hover:shadow-cyan-900/20"
            >
              <div className={`w-14 h-14 rounded-xl ${service.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
