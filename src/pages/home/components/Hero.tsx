
import { useState } from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-sage/20 via-peach/10 to-white overflow-hidden">
      {/* Header with Logo */}
      <header className="w-full py-6 relative z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/d990779b8aded1d3e22b3d1068ffe5e2/4249940262228a8fcce82914c68bb891.png" 
              alt="EuSou"
              className="h-14 w-auto"
            />
          </div>
        </div>
      </header>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent z-10"></div>
      
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-left">
              <div className="mb-8">
                <span className="inline-block px-4 py-2 bg-sage/20 text-sage font-medium rounded-full text-sm mb-6">
                  ✨ Transformação segura e sustentável
                </span>
                <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-gray-900 leading-tight mb-6">
                  Sua melhor
                  <span className="block text-terracotta italic">versão</span>
                  <span className="block">te espera</span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                  Descubra o caminho para um estilo de vida mais saudável com acompanhamento especializado e cuidado integral.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="#services"
                  className="bg-terracotta text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-terracotta/90 transition-all hover:shadow-lg whitespace-nowrap cursor-pointer text-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Começar jornada
                </a>
                <a 
                  href="#services"
                  className="border-2 border-sage text-sage px-8 py-4 rounded-full font-semibold text-lg hover:bg-sage hover:text-white transition-all whitespace-nowrap cursor-pointer text-center"
                >
                  Saiba mais
                </a>
              </div>
              
              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-sage rounded-full mr-2"></div>
                  100% Online
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-terracotta rounded-full mr-2"></div>
                  Acompanhamento 24h
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-peach rounded-full mr-2"></div>
                  Resultados comprovados
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="https://static.readdy.ai/image/d990779b8aded1d3e22b3d1068ffe5e2/606fa82396bb57be080951bf598e1caa.png"
                  alt="Transformação saudável"
                  className="w-full h-[600px] object-cover object-top rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sage/20 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-peach/30 rounded-full blur-lg"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute top-8 -left-4 bg-white p-4 rounded-2xl shadow-lg z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                    <i className="ri-heart-pulse-line text-sage text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Acompanhamento</p>
                    <p className="text-xs text-gray-500">Médico especializado</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 -right-4 bg-white p-4 rounded-2xl shadow-lg z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-terracotta/20 rounded-full flex items-center justify-center">
                    <i className="ri-trophy-line text-terracotta text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Resultados</p>
                    <p className="text-xs text-gray-500">Sustentáveis</p>
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
