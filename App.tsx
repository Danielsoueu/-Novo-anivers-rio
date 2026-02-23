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
  // Updated WhatsApp group link
  const whatsappGroupLink = "https://chat.whatsapp.com/JywoIhcMrldFTZjdX6MDHz"; 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen chalkboard text-zinc-100 pb-20 overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <div className="relative h-[60vh] flex flex-col justify-center items-center text-center p-4 border-b-4 border-yellow-500 bg-zinc-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?q=80&w=2070&auto=format&fit=crop" 
            alt="Party Background" 
            className="w-full h-full object-cover opacity-25 brightness-[0.4] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c1917] via-black/20 to-transparent"></div>
        </div>

        <div className="relative z-10 animate-fade-in-up w-full max-w-2xl px-2">
            <div className="mb-2 text-yellow-500 flex justify-center">
                <Flame size={32} className="animate-pulse sm:w-10 sm:h-10" />
            </div>
          <h2 className="text-lg sm:text-xl tracking-[0.2em] font-light text-zinc-300 mb-2">ANIVERSÁRIO DO</h2>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-display text-yellow-500 drop-shadow-lg transform -rotate-2 break-words leading-none pb-2">
            LUCAS
          </h1>
          <div className="mt-6 flex flex-col gap-2 items-center">
            <span className="bg-yellow-500 text-zinc-900 font-bold px-4 py-1 text-xl sm:text-2xl font-display transform rotate-1 shadow-lg">
              28 DE FEVEREIRO
            </span>
            <span className="text-2xl sm:text-3xl font-bold font-display mt-2 text-zinc-100 shadow-black drop-shadow-md">ÀS 22:00H</span>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-12 relative z-20 space-y-6">
        
        {/* --- LOCATION CARD --- */}
        <div className="bg-zinc-900/95 backdrop-blur-sm border-2 border-yellow-500/50 rounded-xl p-5 sm:p-6 shadow-2xl">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-yellow-500 p-3 rounded-full text-zinc-900 shrink-0 shadow-lg">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-display text-yellow-400 tracking-wide">ADEGA 777</h3>
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
              className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-3 px-2 rounded-lg border border-zinc-700 transition-colors active:scale-95"
            >
              <MapPin size={18} className="text-green-500 shrink-0" />
              <span className="font-bold text-sm truncate">Google Maps</span>
            </a>
            <a 
              href={wazeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 py-3 px-2 rounded-lg border border-zinc-700 transition-colors active:scale-95"
            >
              <Navigation size={18} className="text-blue-400 shrink-0" />
              <span className="font-bold text-sm truncate">Waze</span>
            </a>
          </div>
        </div>

        {/* --- RULES CARD --- */}
        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 sm:p-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <UtensilsCrossed size={100} />
          </div>
          
          <h3 className="text-2xl font-display text-center mb-6 border-b border-zinc-600 pb-2">
            COMES & BEBES
          </h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-red-500/20 p-3 rounded-lg h-fit shrink-0">
                <UtensilsCrossed className="text-red-400" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-red-400 text-lg mb-1">A CARNE</h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  Traz o que você gosta de comer! Vale picanha, linguiça, frango... o que importa é garantir o seu churrasco.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="bg-yellow-500/20 p-3 rounded-lg h-fit shrink-0">
                <Ban className="text-yellow-500" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-yellow-500 text-lg mb-1 flex items-center gap-2 flex-wrap">
                  A BEBIDA <span className="text-xs bg-yellow-600 text-black px-2 py-0.5 rounded font-black tracking-wider">LEIA!</span>
                </h4>
                <p className="text-sm text-zinc-300 font-medium">
                  PROIBIDO LEVAR COOLER!
                </p>
                <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                  A adega tá abastecida com tudo, preço baratinho. Consumo exclusivo no local!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* --- MENU CTA --- */}
        <button 
          onClick={toggleMenu}
          className="w-full group relative overflow-hidden bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-zinc-900 p-6 rounded-xl shadow-lg transition-all transform active:scale-95"
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          <div className="relative flex items-center justify-between">
            <div className="text-left">
              <h3 className="text-2xl font-display font-black">CARDÁPIO DA ADEGA</h3>
              <p className="text-sm font-bold opacity-80 mt-1">CLIQUE PARA VER OS PREÇOS</p>
            </div>
            <div className="bg-zinc-900 p-3 rounded-full text-yellow-500 shrink-0 ml-4 shadow-md">
              <Beer size={28} />
            </div>
          </div>
        </button>

        {/* --- WHATSAPP CTA --- */}
        <div className="bg-[#25D366] rounded-xl p-1 shadow-lg transform transition active:scale-95">
          <a 
            href={whatsappGroupLink}
            className="flex items-center justify-center gap-3 bg-[#1e2f25] hover:bg-[#18271f] text-white p-4 rounded-lg border-2 border-[#25D366] border-dashed"
          >
            <MessageCircle size={24} className="text-[#25D366] shrink-0" />
            <span className="font-bold tracking-wide text-sm sm:text-base text-center">CONFIRMAR NO GRUPO VIP</span>
          </a>
        </div>

        {/* --- FOOTER --- */}
        <div className="text-center pt-8 pb-8 text-zinc-500 space-y-3">
          <p className="font-display text-xl text-zinc-400 tracking-widest">ADEGA 777 OFFICIAL</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-sm">
             <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
                <Phone size={14} className="text-zinc-400" /> 
                <span>(11) 93203-3480</span>
             </div>
             <a 
                href="https://instagram.com/adega777_oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800 hover:border-zinc-600 transition-colors"
             >
                <Instagram size={14} className="text-pink-500" /> 
                <span>@ADEGA777_OFICIAL</span>
             </a>
          </div>
          <p className="text-xs mt-6 opacity-40">Te vejo lá!</p>
        </div>

      </div>

      {/* --- MENU MODAL --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="bg-zinc-900 w-full sm:max-w-lg h-[90vh] sm:h-[85vh] rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col border-t sm:border border-yellow-500/30 overflow-hidden animate-slide-up sm:animate-fade-in-up">
            
            {/* Header */}
            <div className="p-4 bg-zinc-800 border-b border-zinc-700 flex justify-between items-center shrink-0 shadow-md z-20">
              <div className="flex items-center gap-3">
                <div className="bg-yellow-500 p-2 rounded-lg text-zinc-900">
                    <Beer size={20} />
                </div>
                <h2 className="text-xl font-display text-zinc-100 tracking-wide">MENU ADEGA 777</h2>
              </div>
              <button 
                onClick={toggleMenu}
                className="p-2 bg-zinc-700 rounded-full hover:bg-zinc-600 transition-colors text-zinc-300"
                aria-label="Fechar menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto p-4 space-y-8 custom-scrollbar pb-24 sm:pb-4">
              {menuData.map((category: MenuCategory) => (
                <div key={category.id} className="mb-2">
                  <h3 className="text-yellow-500 font-black tracking-wider text-lg mb-4 border-b border-zinc-800 pb-2 sticky top-0 bg-zinc-900/95 backdrop-blur-sm pt-1 z-10 shadow-sm">
                    {category.title}
                  </h3>
                  <div className="space-y-4">
                    {category.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col border-b border-dashed border-zinc-800 pb-3 last:border-0 last:pb-0">
                        <div className="flex justify-between items-start gap-4">
                          <span className="text-zinc-200 font-medium text-sm leading-tight">{item.name}</span>
                          <span className="text-yellow-400 font-bold text-sm whitespace-nowrap bg-yellow-500/10 px-2 py-0.5 rounded">{item.price}</span>
                        </div>
                        {item.detail && (
                          <span className="text-xs text-zinc-500 mt-1.5 leading-relaxed">{item.detail}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="text-center p-6 bg-zinc-800/50 border border-dashed border-zinc-700 rounded-xl mt-6">
                <Music size={24} className="mx-auto text-purple-400 mb-2" />
                <p className="text-sm text-zinc-400">Consulte o balcão para promoções relâmpago!</p>
              </div>
            </div>

            {/* Footer Close Button - Mobile Sticky */}
            <div className="p-4 bg-zinc-800 border-t border-zinc-700 shrink-0 absolute bottom-0 left-0 right-0 sm:relative">
              <button 
                onClick={toggleMenu}
                className="w-full bg-zinc-200 text-zinc-900 font-bold py-3.5 rounded-lg hover:bg-white active:bg-zinc-300 transition-colors shadow-lg"
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
        @keyframes slide-up {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        /* Custom Scrollbar for Menu */
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #18181b; 
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3f3f46; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #52525b; 
        }
      `}</style>
    </div>
  );
};

export default App;