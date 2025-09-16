
export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-terracotta via-peach to-sage relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full text-sm mb-6">
              ✨ Sua transformação começa agora
            </span>
            <h2 className="text-4xl lg:text-6xl font-playfair font-bold mb-6 leading-tight">
              Pronto para transformar
              <span className="block italic">sua vida?</span>
            </h2>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Junte-se a milhares de pessoas que já conquistaram um estilo de vida mais saudável com segurança e acompanhamento especializado
            </p>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">100% Seguro</h3>
              <p className="text-white/80 text-sm">Acompanhamento médico especializado em cada etapa</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">Suporte 24/7</h3>
              <p className="text-white/80 text-sm">Equipe disponível sempre que você precisar</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <h3 className="font-semibold text-lg mb-2">Resultados Reais</h3>
              <p className="text-white/80 text-sm">Transformações sustentáveis e duradouras</p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="mb-8">
            <a 
              href="#services"
              className="bg-white text-terracotta px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-50 transition-all cursor-pointer whitespace-nowrap shadow-2xl hover:shadow-3xl hover:-translate-y-2 inline-block"
            >
              <i className="fab fa-whatsapp mr-3 text-green-500"></i>
              Falar com especialista agora
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center space-x-2 text-sm opacity-80">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-white/20 rounded-full border-2 border-white"></div>
            </div>
            <span>Mais de 10.000 pessoas já transformaram suas vidas</span>
          </div>

          {/* Bottom text */}
          <div className="mt-12 text-center">
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              Atendimento online • Prescrição segura • Acompanhamento multidisciplinar • Resultados comprovados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
