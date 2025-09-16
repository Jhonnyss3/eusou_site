
export default function Services() {
  const services = [
    {
      id: 1,
      title: "Consulta Express",
      subtitle: "Avaliação médica especializada",
      description: "Perfeito para quem busca prescrição segura com acompanhamento clínico",
      features: [
        "Consulta online com médico especialista",
        "Prescrição segura de medicações (GLP-1) quando indicado",
        "Orientações personalizadas para sua jornada",
        "Suporte para aquisição em farmácias parceiras"
      ],
      icon: "ri-video-line",
      color: "sage",
      image: "https://readdy.ai/api/search-image?query=Modern%20elegant%20telemedicine%20consultation%20setup%2C%20stylish%20doctor%20in%20contemporary%20office%2C%20lifestyle%20wellness%20consultation%2C%20soft%20natural%20lighting%2C%20minimalist%20aesthetic%2C%20warm%20earth%20tones%2C%20professional%20but%20approachable%20atmosphere%2C%20modern%20healthcare%20delivery%20with%20sophisticated%20design&width=600&height=400&seq=service003&orientation=landscape"
    },
    {
      id: 2,
      title: "Jornada Completa",
      subtitle: "Transformação integral e sustentável",
      description: "Cuidado multidisciplinar completo para resultados duradouros",
      features: [
        "Avaliação médica detalhada e criteriosa",
        "Time multidisciplinar: médico, nutricionista, trainer e psiquiatra",
        "Plano personalizado baseado em seus dados únicos",
        "Suporte diário via WhatsApp com orientações",
        "Monitoramento contínuo e ajustes precisos",
        "Plataforma integrada para consultas e acompanhamento"
      ],
      icon: "ri-team-line",
      color: "terracotta",
      image: "https://readdy.ai/api/search-image?query=Elegant%20multidisciplinary%20wellness%20team%20consultation%2C%20sophisticated%20healthcare%20professionals%20in%20modern%20lifestyle%20setting%2C%20diverse%20team%20of%20specialists%20including%20doctor%20nutritionist%20fitness%20trainer%2C%20contemporary%20wellness%20center%2C%20warm%20natural%20lighting%2C%20professional%20lifestyle%20photography&width=600&height=400&seq=service004&orientation=landscape"
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === 'sage') {
      return {
        bg: 'bg-sage',
        bgLight: 'bg-sage/10',
        text: 'text-sage',
        hover: 'hover:bg-sage/90'
      };
    }
    return {
      bg: 'bg-terracotta',
      bgLight: 'bg-terracotta/10',
      text: 'text-terracotta',
      hover: 'hover:bg-terracotta/90'
    };
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-sage/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-peach/20 text-terracotta font-medium rounded-full text-sm mb-6">
            Nossos caminhos para sua transformação
          </span>
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Escolha seu
            <span className="block text-terracotta italic">estilo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Duas abordagens pensadas especialmente para atender suas necessidades e ritmo de vida
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            return (
              <div key={service.id} className="group">
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className={`absolute top-6 left-6 w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-8">
                      <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className={`${colors.text} font-semibold text-lg mb-3`}>{service.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-4 mb-8 flex-1">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`w-6 h-6 ${colors.bgLight} rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0`}>
                            <i className={`ri-check-line ${colors.text} text-sm`}></i>
                          </div>
                          <span className="text-gray-700 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <a
                      href={service.id === 1 ? "https://wa.me/5521994233196?text=Ol%C3%A1%2C%20escolhi%20a%20consulta%20Express%21" : "https://wa.me/5521994233196?text=Ol%C3%A1%2C%20escolhi%20a%20Jornada%20Completa%21"}
                      className={`w-full ${colors.bg} text-white py-4 px-6 rounded-2xl font-semibold text-lg ${colors.hover} transition-all duration-300 cursor-pointer whitespace-nowrap shadow-lg hover:shadow-xl hover:-translate-y-1 text-center block mt-auto`}
                    >
                      <i className="fab fa-whatsapp mr-2"></i>
                      Escolher este caminho
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Não tem certeza qual é ideal para você?</p>
          <a 
            href="#services"
            className="bg-gradient-to-r from-sage to-terracotta text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all cursor-pointer whitespace-nowrap inline-block"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            Fale conosco - Te ajudamos a escolher
          </a>
        </div>
      </div>
    </section>
  );
}
