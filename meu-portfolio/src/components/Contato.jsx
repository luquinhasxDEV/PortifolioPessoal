export default function Contato() {
  const contactLinks = [
    {
      title: 'E-mail',
      subtext: 'Enviar mensagem direta',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=lucas.santos050485@gmail.com&su=Contato%20via%20Portf%C3%B3lio',
      icon: '✉️'
    },
    {
      title: 'LinkedIn',
      subtext: 'Conectar no perfil profissional',
      link: 'https://www.linkedin.com/in/luquinhasdev/',
      icon: '💼'
    },
    {
      title: 'GitHub',
      subtext: 'Ver repositórios e projetos',
      link: 'https://github.com/luquinhasxDEV',
      icon: '🐙'
    }
  ];

  return (
    <section id="contato" className="bg-[#0F172A] py-20 px-8 border-t border-[#374151]/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white">Vamos conversar?</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Estou disponível para oportunidades de estágio, projetos e conexões na área de desenvolvimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-4">
          {contactLinks.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              rel="noreferrer"
              className="bg-[#1E293B] border border-[#374151] p-5 rounded-2xl hover:border-gray-400 transition-all group"
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <h3 className="text-white font-bold text-base group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xs mt-1">{item.subtext}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}