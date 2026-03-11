import { motion } from 'motion/react';
import { AlertTriangle, FileSpreadsheet, Clock, TrendingDown } from 'lucide-react';

export default function Problem() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            A maioria dos pequenos negócios não tem clareza sobre seus próprios dados
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Muitas empresas dependem de planilhas confusas, relatórios manuais e processos repetitivos. Isso gera perda de tempo, erros operacionais e decisões tomadas sem informação confiável.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: FileSpreadsheet,
              title: "Planilhas Confusas",
              desc: "Dados espalhados em dezenas de arquivos difíceis de atualizar e analisar."
            },
            {
              icon: Clock,
              title: "Trabalho Manual",
              desc: "Horas perdidas toda semana copiando e colando informações entre sistemas."
            },
            {
              icon: TrendingDown,
              title: "Decisões no Escuro",
              desc: "Dificuldade de saber o verdadeiro lucro, produtos mais vendidos ou gargalos."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-slate-950/50 border border-slate-800 rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-800/50 rounded-2xl p-8 text-center max-w-4xl mx-auto"
        >
          <AlertTriangle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
          <p className="text-xl md:text-2xl font-medium text-slate-200">
            Enquanto grandes empresas utilizam Business Intelligence e automação para crescer, pequenos negócios raramente têm acesso a essas ferramentas.
          </p>
          <p className="text-cyan-400 font-bold mt-4 text-lg">
            A Hydra Analytics foi criada para mudar isso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
