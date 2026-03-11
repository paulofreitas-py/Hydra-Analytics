import { motion } from 'motion/react';
import { Target, MessageSquare, Layout, Settings, DollarSign, TrendingUp } from 'lucide-react';

export default function Differentials() {
  const items = [
    { icon: Target, title: "Foco em pequenas empresas", desc: "Soluções desenhadas para a realidade de PMEs e MEIs." },
    { icon: Layout, title: "Soluções simples e visuais", desc: "Dashboards claros e fáceis de usar, sem jargões técnicos." },
    { icon: Settings, title: "Automação real com n8n", desc: "Não apenas relatórios, mas processos que funcionam sozinhos." },
    { icon: TrendingUp, title: "Tecnologia acessível", desc: "O poder das grandes corporações no seu negócio." },
    { icon: DollarSign, title: "Preço justo", desc: "Planos que cabem no orçamento de quem está crescendo." },
    { icon: MessageSquare, title: "Atendimento próximo", desc: "Suporte personalizado e focado no seu sucesso." }
  ];

  return (
    <section id="sobre" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher a Hydra Analytics
          </h2>
          <p className="text-lg text-slate-400">
            A Hydra foi criada para atender um público que muitas vezes fica esquecido pelas grandes consultorias: os pequenos negócios. Nosso objetivo não é apenas entregar tecnologia, mas gerar impacto real no seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
