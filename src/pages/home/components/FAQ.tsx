
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const faqs = [
    {
      question: "Posso mudar de plano depois de iniciar?",
      answer: "Absolutamente! Nossa equipe está sempre disponível para ajustar seu plano conforme suas necessidades evolvem. Entendemos que cada jornada é única e pode requerer mudanças ao longo do caminho."
    },
    {
      question: "Como recebo os medicamentos?",
      answer: "Você pode adquirir a medicação em farmácias parceiras ou na farmácia de sua preferência, sempre com prescrição médica segura e orientações detalhadas de uso."
    },
    {
      question: "O que está incluído no suporte multidisciplinar?",
      answer: "Nossos profissionais especializados estão presentes para orientações médicas, nutricionais, físicas e emocionais. O suporte está disponível diariamente via WhatsApp com respostas rápidas e personalizadas."
    },
    {
      question: "Preciso ir a alguma clínica física?",
      answer: "Não! Todo o processo é 100% digital para sua comodidade e segurança. Consultas, acompanhamentos e suporte acontecem online, permitindo que você cuide da sua saúde de onde estiver."
    },
    {
      question: "Quanto tempo leva para ver resultados?",
      answer: "Os resultados variam de pessoa para pessoa, mas muitos pacientes relatam mudanças positivas nas primeiras semanas. Nosso acompanhamento contínuo garante que você tenha suporte em cada etapa."
    },
    {
      question: "O tratamento é seguro?",
      answer: "Sim! Todos os nossos protocolos seguem rigorosos padrões médicos com prescrição criteriosa e acompanhamento especializado. Sua segurança é nossa prioridade absoluta."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-sage/5 to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-peach/20 text-terracotta font-medium rounded-full text-sm mb-6">
            Suas dúvidas, nossas respostas
          </span>
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
            Perguntas
            <span className="block text-terracotta italic">frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre nossos tratamentos e acompanhamento
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-sage/5 transition-colors cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-sage/10 flex items-center justify-center transition-transform duration-300 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  <i className="ri-add-line text-sage text-xl"></i>
                </div>
              </button>
              
              <div className={`px-8 transition-all duration-300 ease-in-out ${
                openIndex === index ? 'pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
              }`}>
                <div className="border-t border-gray-100 pt-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-sage/10 to-terracotta/10 rounded-3xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para esclarecer qualquer questão e ajudar você a escolher o melhor caminho
            </p>
            <a 
              href="#services"
              className="bg-gradient-to-r from-sage to-terracotta text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all cursor-pointer whitespace-nowrap hover:-translate-y-1 inline-block"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Conversar com especialista
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
