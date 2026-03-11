import { BarChart3, Mail, MessageCircle, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="Hydra Analytics" 
                className="h-14 w-auto mix-blend-screen invert grayscale contrast-125 brightness-150 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = document.getElementById('footer-fallback-icon');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div id="footer-fallback-icon" className="hidden w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Hydra Analytics</span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              Conectando dados, multiplicando insights. Inteligência de dados e automação acessível para pequenos negócios.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Navegação</h4>
            <ul className="space-y-2">
              {['Início', 'Soluções', 'Automação', 'Planos', 'Sobre'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace('í', 'i').replace('ç', 'c').replace('õ', 'o')}`} className="text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Contato</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:contato@hydraanalytics.com" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  <Mail className="w-4 h-4" />
                  contato@hydraanalytics.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/5511999999999" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Hydra Analytics. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300">Termos de Uso</a>
            <a href="#" className="hover:text-slate-300">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
