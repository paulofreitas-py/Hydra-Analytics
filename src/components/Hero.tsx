import { motion } from 'motion/react';
import { ArrowRight, MessageCircle, Activity, Database, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Inteligência de dados para PMEs
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Transforme dados em <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">decisões inteligentes</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed">
              A Hydra Analytics transforma dados em dashboards claros, relatórios automáticos e automações inteligentes, permitindo que empresas tomem decisões melhores e cresçam com eficiência.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contato" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-950 font-semibold hover:bg-cyan-50 transition-colors"
              >
                Solicitar Demonstração
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors border border-slate-700"
              >
                <MessageCircle className="w-4 h-4 text-green-400" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Visual/Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl bg-slate-900/80 border border-slate-800 p-2 shadow-2xl backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 rounded-2xl" />
              
              {/* Fake Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-800/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6 grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <Activity className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm">Vendas Hoje</span>
                    </div>
                    <div className="text-2xl font-bold">R$ 4.250</div>
                    <div className="text-xs text-emerald-400 mt-1">+12% vs ontem</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <Database className="w-4 h-4 text-blue-400" />
                      <span className="text-sm">Leads Ativos</span>
                    </div>
                    <div className="text-2xl font-bold">128</div>
                    <div className="text-xs text-emerald-400 mt-1">+5 novos hoje</div>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 h-40 flex items-end gap-2">
                  {/* Fake Chart Bars */}
                  {[40, 70, 45, 90, 65, 85, 100].map((height, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                      className="flex-1 bg-gradient-to-t from-cyan-500/20 to-cyan-400 rounded-t-sm"
                    />
                  ))}
                </div>

                {/* Automation Flow Hint */}
                <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Relatório Diário</div>
                      <div className="text-xs text-slate-400">Enviado via WhatsApp</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                    Sucesso
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-6 -top-6 bg-slate-800 border border-slate-700 rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-bold">Alerta de Venda</div>
                  <div className="text-xs text-slate-400">Nova conversão registrada</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
