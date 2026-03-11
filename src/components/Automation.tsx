import { motion } from 'motion/react';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Automation() {
  const examples = [
    "Envio automático de relatórios",
    "Integração entre planilhas e sistemas",
    "Notificações automáticas de vendas",
    "Alertas de estoque baixo",
    "Envio de dados para dashboards automaticamente",
    "Integração entre CRM e ferramentas operacionais"
  ];

  return (
    <section id="automacao" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/20 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Diferencial Hydra
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Automação inteligente para pequenas empresas
            </h2>
            
            <p className="text-lg text-slate-400 mb-6">
              Utilizamos a plataforma <strong>n8n</strong> para criar automações que conectam sistemas, eliminam tarefas repetitivas e melhoram a eficiência operacional.
            </p>
            
            <p className="text-lg text-slate-400 mb-8">
              A automação permite que pequenas empresas tenham acesso ao mesmo nível de tecnologia utilizado por grandes organizações, sem a necessidade de uma grande equipe de TI.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">Exemplos práticos:</h3>
              {examples.map((example, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span className="text-slate-300">{example}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visual Representation of Automation */}
          <div className="relative">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl">
              <div className="flex flex-col gap-6">
                {/* Flow Item 1 */}
                <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                    <span className="font-bold text-green-400">P</span>
                  </div>
                  <div>
                    <div className="font-medium">Nova venda na Planilha</div>
                    <div className="text-xs text-slate-400">Gatilho (Trigger)</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-slate-600 rotate-90" />
                </div>

                {/* Flow Item 2 */}
                <div className="flex items-center gap-4 bg-slate-900 p-4 rounded-xl border border-slate-800">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
                    <span className="font-bold text-orange-400">n8n</span>
                  </div>
                  <div>
                    <div className="font-medium">Processamento Hydra</div>
                    <div className="text-xs text-slate-400">Formata e calcula dados</div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-6 h-6 text-slate-600 rotate-90" />
                </div>

                {/* Flow Item 3 (Split) */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center shrink-0">
                      <span className="font-bold text-yellow-400">BI</span>
                    </div>
                    <div className="text-sm font-medium">Atualiza Dashboard</div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-900 p-4 rounded-xl border border-slate-800">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                      <span className="font-bold text-emerald-400">W</span>
                    </div>
                    <div className="text-sm font-medium">Avisa no WhatsApp</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
