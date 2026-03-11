import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contato" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para transformar seus dados em decisões inteligentes?
          </h2>
          
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Descubra como dashboards, automação e análise de dados podem ajudar sua empresa a ganhar clareza, eficiência e crescimento.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/25"
            >
              Solicitar proposta
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-800 text-white font-bold text-lg hover:bg-slate-700 transition-colors border border-slate-700"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
