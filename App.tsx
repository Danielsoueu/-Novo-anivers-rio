import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Beer, 
  UtensilsCrossed, 
  Ban, 
  MessageCircle, 
  Menu, 
  X, 
  Instagram, 
  Phone,
  Flame,
  Music
} from 'lucide-react';
import { menuData } from './data';
import { MenuCategory } from './types';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const googleMapsLink = "https://www.google.com/maps/search/?api=1&query=Adega+777+Rua+Lino+Coutinho+1871";
  const wazeLink = "https://waze.com/ul?q=Rua+Lino+Coutinho+1871";
  // Placeholder for WhatsApp group
  const whatsappGroupLink = "https://chat.whatsapp.com/invite/placeholder"; 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen chalkboard text-zinc-100 pb-20 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex flex-col justify-center items-center text-center p-4 border-b-4 border-yellow-500">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2070&auto=format&fit=crop" 
            alt="Party Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] to-transparent"></div>
        </div>

        <div className="relative z-10 animate-fade-in-up">
            <div className="mb-2 text-yellow-500 flex justify-center">
                <Flame size={40} className="animate-pulse" />
            </div>
          <h2 className="text-xl tracking-[0.2em] font-light text-zinc-300 mb-2">ANIVERSÁRIO DO</h2>
          <h1 className="text-7xl md:text-8xl font-display text-yellow-500 drop-shadow-lg transform -rotate-2">
            LUCAS
          </h1>
          <div className="mt-6 flex flex-col gap-2 items-center">
            <span className="bg-yellow-500 text-zinc-900 font-bold px-6 py-1 text-2xl font-display transform rotate-1">
              28 DE FEVEREIRO
            </span>
            <span className="text-3xl font-bold font-display mt-2">ÀS 22:00H</span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-12 relative z-20 space-y-6">
        
        {/* --- LOCATION CARD --- */}
        <div className="bg-zinc-900/90 backdrop-blur-sm border-2 border-yellow-500/50 rounded-xl p-6 shadow-2xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-yellow-500 p-3 rounded-full text-zinc-900">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display text-yellow-400">ADEGA 777</h3>
              <p className="text-zinc-300 text-sm leading-relaxed mt-1">
                R. Lino Coutinho, 1871<br />
                Ipiranga, São Paulo - SP
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <a 
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-lg border border-zinc-700 transition-colors"
            >
              <MapPin size={18} className="text-green-500" />
              <span className="font-bold text-sm">Google Maps</span>
            </a>
            <a 
              href={wazeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-3 rounded-lg border border-zinc-700 transition-colors"
            >
              <Navigation size={18} className="text-blue-400" />
              <span className="font-bold text-sm">Waze</span>
            </a>
          </div>
        </div>

        {/* --- RULES CARD --- */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <UtensilsCrossed size={100} />
          </div>
          
          <h3 className="text-2xl font-display text-center mb-6 border-b border-zinc-600 pb-2">
            COMES & BEBES
          </h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-red-500/20 p-3 rounded-lg h-fit">
                <UtensilsCrossed className="text-red-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-red-400 text-lg mb-1">A CARNE</h4>
                <p className="text-sm text-zinc-300">
                  Traz o que você gosta de comer! Vale picanha, linguiça, frango... o que importa é garantir o seu churrasco.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-yellow-500/20 p-3 rounded-lg h-fit">
                <Ban className="text-yellow-500" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-yellow-500 text-lg mb-1 flex items-center gap-2">
                  A BEBIDA <span className="text-xs bg-yellow-600 text-black px-2 py-0.5 rounded">LEIA!</span>
                </h4>
                <p className="text-sm text-zinc-300 font-medium">
                  PROIBIDO LEVAR COOLER!
                </p>
                <p className="text-sm text-zinc-400 mt-1">
                  A adega tá abastecida com tudo, preço baratinho. Consumo exclusivo no local!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- MENU CTA --- */}
        <button 
          onClick={toggleMenu}
          className="w-full group relative overflow-hidden bg-yellow-500 hover:bg-yellow-400 text-zinc-900 p-6 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          <div className="relative flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-2xl font-display font-black">CARDÁPIO DA ADEGA</h3>
              <p className="text-sm font-bold opacity-80">CLIQUE PARA VER OS PREÇOS</p>
            </div>
            <div className="bg-zinc-900 p-3 rounded-full text-yellow-500">
              <Beer size={28} />
            </div>
          </div>
        </button>

        {/* --- WHATSAPP CTA --- */}
        <div className="bg-[#25D366] rounded-xl p-1 shadow-lg transform transition hover:-translate-y-1">
          <a 
            href={whatsappGroupLink}
            className="flex items-center justify-center gap-3 bg-[#1e2f25] hover:bg-[#18271f] text-white p-4 rounded-lg border-2 border-[#25D366] border-dashed"
          >
            <MessageCircle size={24} className="text-[#25D366]" />
            <span className="font-bold tracking-wide">CONFIRMAR NO GRUPO VIP</span>
          </a>
        </div>

        {/* --- FOOTER --- */}
        <div className="text-center pt-8 pb-4 text-zinc-500 space-y-2">
          <p className="font-display text-xl text-zinc-400">ADEGA 777 OFFICIAL</p>
          <div className="flex justify-center gap-4 text-sm">
             <div className="flex items-center gap-1">
                <Phone size={14} /> (11) 93203-3480
             </div>
             <div className="flex items-center gap-1">
                <Instagram size={14} /> @ADEGA777_OFICIAL
             </div>
          </div>
          <p className="text-xs mt-4 opacity-50">Te vejo lá!</p>
        </div>

      </div>

      {/* --- MENU MODAL --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-zinc-900 w-full max-w-lg h-[85vh] rounded-2xl shadow-2xl flex flex-col border border-yellow-500/30 overflow-hidden">
            
            {/* Header */}
            <div className="p-4 bg-zinc-800 border-b border-zinc-700 flex justify-between items-center shrink-0">
              <div className="flex items-center gap-2">
                <Beer className="text-yellow-500" size={20} />
                <h2 className="text-xl font-display text-zinc-100">MENU ADEGA 777</h2>
              </div>
              <button 
                onClick={toggleMenu}
                className="p-2 bg-zinc-700 rounded-full hover:bg-zinc-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4 space-y-6 custom-scrollbar">
              {menuData.map((category: MenuCategory) => (
                <div key={category.id} className="mb-6">
                  <h3 className="text-yellow-500 font-bold text-lg mb-3 border-b border-zinc-800 pb-1 sticky top-0 bg-zinc-900 pt-2 z-10">
                    {category.title}
                  </h3>
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col border-b border-dashed border-zinc-800 pb-2 last:border-0">
                        <div className="flex justify-between items-start">
                          <span className="text-zinc-200 font-medium text-sm">{item.name}</span>
                          <span className="text-yellow-400 font-bold text-sm whitespace-nowrap ml-4">{item.price}</span>
                        </div>
                        {item.detail && (
                          <span className="text-xs text-zinc-500 mt-1">{item.detail}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="text-center p-4 bg-zinc-800 rounded-lg mt-4">
                <Music size={24} className="mx-auto text-purple-400 mb-2" />
                <p className="text-sm text-zinc-400">Consulte o balcão para promoções relâmpago!</p>
              </div>
            </div>

            {/* Footer Close Button */}
            <div className="p-4 bg-zinc-800 border-t border-zinc-700 shrink-0">
              <button 
                onClick={toggleMenu}
                className="w-full bg-zinc-200 text-zinc-900 font-bold py-3 rounded-lg hover:bg-white transition-colors"
              >
                FECHAR CARDÁPIO
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations Styles */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        /* Custom Scrollbar for Menu */
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #18181b; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46; 
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #52525b; 
        }
      `}</style>
    </div>
  );
};

export default App;