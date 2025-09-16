
export default function WhyChoose() {
  const benefits = [
    {
      icon: "ri-shield-check-line",
      title: "Prescrição Responsável",
      description: "Protocolos clínicos claros com consentimento informado e total transparência no processo",
      color: "sage"
    },
    {
      icon: "ri-heart-3-line",
      title: "Cuidado Integral",
      description: "Muito além da medicação - cuidamos do corpo, mente e rotina em um protocolo completo",
      color: "terracotta"
    },
    {
      icon: "ri-graduation-cap-line",
      title: "Educação & Autonomia",
      description: "Conteúdos exclusivos e rituais para criar hábitos saudáveis que durem para sempre",
      color: "peach"
    },
    {
      icon: "ri-eye-line",
      title: "Transparência Total",
      description: "Ética, metas claras e comunicação honesta para garantir resultados duradouros",
      color: "sage"
    },
    {
      icon: "ri-user-heart-line",
      title: "Equipe Dedicada",
      description: "Especialistas focados em acompanhar você em cada etapa da sua transformação",
      color: "terracotta"
    },
    {
      icon: "ri-line-chart-line",
      title: "Resultados Comprovados",
      description: "Metodologia testada com milhares de pessoas que conquistaram seus objetivos",
      color: "peach"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'sage':
        return {
          bg: 'bg-sage/10',
          text: 'text-sage',
          icon: 'text-sage'
        };
      case 'terracotta':
        return {
          bg: 'bg-terracotta/10',
          text: 'text-terracotta',
          icon: 'text-terracotta'
        };
      case 'peach':
        return {
          bg: 'bg-peach/10',
          text: 'text-peach',
          icon: 'text-peach'
        };
      default:
        return {
          bg: 'bg-sage/10',
          text: 'text-sage',
          icon: 'text-sage'
        };
    }
  };

  const stats = [
    { number: "10k+", label: "Pessoas transformadas" },
    { number: "95%", label: "Taxa de satisfação" },
    { number: "24/7", label: "Suporte disponível" },
    { number: "100%", label: "Online e seguro" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-sage/5 to-peach/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-terracotta/20 text-terracotta font-medium rounded-full text-sm mb-6">
            Por que milhares escolheram o EuSou
          </span>
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Sua transformação
            <span className="block text-terracotta italic">merece o melhor</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Combinamos ciência, tecnologia e cuidado humano para criar uma experiência única de emagrecimento
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-playfair font-bold text-terracotta mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const colors = getColorClasses(benefit.color);
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 h-full hover:-translate-y-2">
                  <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${benefit.icon} text-2xl ${colors.icon}`}></i>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-gray-900 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-sage/10 via-peach/10 to-terracotta/10 rounded-3xl p-12">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Pronto para sua transformação?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de pessoas que já descobriram seu melhor eu com segurança e acompanhamento especializado
            </p>
            <a 
              href="#services"
              className="bg-gradient-to-r from-terracotta to-peach text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all cursor-pointer whitespace-nowrap hover:-translate-y-1 inline-block"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Iniciar minha jornada agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
