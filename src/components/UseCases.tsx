import { motion } from 'motion/react';
import { Building2, Cross, Store, UserCircle } from 'lucide-react';

export default function UseCases() {
  const cases = [
    {
      icon: Building2,
      title: "Hotelaria",
      desc: "Monitoramento de reservas, ocupação e faturamento por temporada.",
      color: "text-blue-400"
    },
    {
      icon: Cross,
      title: "Farmácias",
      desc: "Controle de vendas, estoque, ticket médio e análise de produtos mais vendidos.",
      color: "text-emerald-400"
    },
    {
      icon: Store,
      title: "Lojas Locais",
      desc: "Análise de vendas, fluxo de caixa e desempenho de produtos em tempo real.",
      color: "text-orange-400"
    },
    {
      icon: UserCircle,
      title: "Microempreendedores",
      desc: "Controle financeiro simples, relatórios automatizados e acompanhamento do negócio.",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="casos-de-uso" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Aplicações Práticas
          </h2>
          <p className="text-lg text-slate-400">
            Soluções adaptadas para a realidade do seu segmento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:bg-slate-800/50 transition-colors"
            >
              <item.icon className={`w-10 h-10 ${item.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
