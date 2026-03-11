import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';

export default function FutureVision() {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/future/1920/1080')] opacity-5 mix-blend-overlay bg-cover bg-center" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-16 h-16 mx-auto bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8">
          <Rocket className="w-8 h-8 text-blue-400" />
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
          Construindo a próxima geração de Business Intelligence para PMEs
        </h2>
        
        <div className="space-y-6 text-lg text-slate-300">
          <p>
            A Hydra Analytics está evoluindo para se tornar uma plataforma completa de dados e automação para pequenas empresas.
          </p>
          <p>
            Nosso objetivo é desenvolver soluções plug-and-play com dashboards prontos, integrações automáticas e ferramentas simples que democratizem o acesso à inteligência de dados no Brasil.
          </p>
          <p className="font-medium text-cyan-400 pt-4">
            Nosso plano inclui o desenvolvimento do Hydra CRM, automação integrada de processos e dashboards prontos por segmento.
          </p>
        </div>
      </div>
    </section>
  );
}
