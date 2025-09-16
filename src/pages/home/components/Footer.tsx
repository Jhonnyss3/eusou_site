
export default function Footer() {
  const quickLinks = [
    { name: 'Consulta Express', href: '#services' },
    { name: 'Jornada Completa', href: '#services' },
    { name: 'Perguntas Frequentes', href: '#faq' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Contato', href: '#services' }
  ];

  const legalLinks = [
    { name: 'Política de Privacidade', href: '#' },
    { name: 'Termos de Uso', href: '#' },
    { name: 'LGPD', href: '#' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-4xl font-playfair font-bold text-sage mb-4">
                EuSou
              </h3>
              <p className="text-gray-300 leading-relaxed max-w-md mb-6">
                Transformamos o "eu quero" em "EuSou" através de ciência, cuidado multidisciplinar e tecnologia. 
                Sua jornada de emagrecimento seguro e sustentável começa aqui.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-gray-300 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center mr-3">
                    <i className="fab fa-whatsapp text-sage"></i>
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-sm opacity-80">Atendimento 24 horas</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-terracotta/20 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-mail-line text-terracotta"></i>
                  </div>
                  <div>
                    <p className="font-medium">contato@eusou.com.br</p>
                    <p className="text-sm opacity-80">Resposta em até 2h</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <button className="w-12 h-12 bg-sage/20 hover:bg-sage/30 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="fab fa-whatsapp text-sage text-lg"></i>
              </button>
              <button className="w-12 h-12 bg-terracotta/20 hover:bg-terracotta/30 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="fab fa-instagram text-terracotta text-lg"></i>
              </button>
              <button className="w-12 h-12 bg-peach/20 hover:bg-peach/30 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="fab fa-facebook text-peach text-lg"></i>
              </button>
              <button className="w-12 h-12 bg-sage/20 hover:bg-sage/30 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="fab fa-youtube text-sage text-lg"></i>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-sage">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-sage transition-colors cursor-pointer block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-terracotta">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Consulta médica online</li>
              <li>Prescrição GLP-1</li>
              <li>Acompanhamento nutricional</li>
              <li>Personal trainer</li>
              <li>Suporte psiquiátrico</li>
              <li>Monitoramento 24/7</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © 2024 EuSou. Todos os direitos reservados. | CNPJ: 00.000.000/0001-00
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-end space-x-6 text-sm">
              {legalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-gray-400 hover:text-sage transition-colors cursor-pointer"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://readdy.ai/?origin=logo" 
                className="text-gray-400 hover:text-sage transition-colors cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Made with Readdy
              </a>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-xs text-gray-500 text-center leading-relaxed">
              Este site não substitui consulta médica. Os resultados podem variar de pessoa para pessoa. 
              Consulte sempre um médico antes de iniciar qualquer tratamento. Medicamentos sujeitos à prescrição médica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
