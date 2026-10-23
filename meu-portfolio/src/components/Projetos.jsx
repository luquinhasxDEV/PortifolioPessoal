import safeip from '../assets/Logo SafeIP.png';
import autoplan from '../assets/autoplan.png';
import cine from '../assets/cineFlurrys.jpg';
import porti from '../assets/portifolio.png'
import crud from '../assets/CRUD.png'

export default function Projetos() {
  const projectsList = [
    {
      title: 'Safe IP - TCC SENAI',
      image: safeip, // Corrigido de "Image" para "image"
      description: 'O sistema restringe o acesso somente a computadores autorizados, utilizando filtragem de IP, além de registrar todas as ações dos usuários, implementar validações extras como CAPTCHA e oferecer módulos de arquivos, equipe e financeiro.',
      techs: [
        { name: 'Java', color: 'border-orange-500/50' },
        { name: 'Vue.js', color: 'border-purple-500/50' },
        { name: 'JavaScript', color: 'border-yellow-500/50' },
        { name: 'HTML', color: 'border-blue-500/50' },
      ],
      github: 'https://github.com/luquinhasxDEV/SafeIP_TCC'
    },
    {
      title: 'AUTOPLAN',
      image: autoplan,
      description: 'Este projeto em C# foi desenvolvido com o objetivo de automatizar a criação e manipulação de arquivos do Microsoft Project (MPP) a partir de dados estruturados em planilhas ou outras fontes.',
      techs: [
        { name: 'C#', color: 'border-[#512BD4]/50' },
        { name: '.NET', color: 'border-[#512BD4]/50' },
        { name: 'Figma UI', color: 'border-emerald-500/50' }
      ],
      github: 'https://github.com/luquinhasxDEV/ProjetoMetanoia'
    },
    {
      title: 'Cine Flurrys',
      image: cine,
      description: 'Sistema de Cinema completo focado na navegação visual de filmes, buscando dados de maneira interativa e com layout moderno.',
      techs: [
        { name: 'CSS', color: 'border-blue-500/50' },
        { name: 'JavaScript', color: 'border-yellow-500/50' }
      ],
      github: 'https://github.com/luquinhasxDEV/Cine-Flurrys'
    },
    {
      title: 'Meu Portifólio',
      image: porti,
      description: 'Portifólio que contém informações básicas e completas sobre mim, Lucas. Assim, mostra meus projetos, meus connhecimentos, meus contatos e muito mais',
      techs: [
        { name: 'CSS', color: 'border-blue-500/50' },
        { name: 'JavaScript', color: 'border-yellow-500/50' },
        { name: 'HTML', color: 'border-blue-500/50' },
        { name: 'Figma UI', color: 'border-emerald-500/50' }
      ],
      github: 'https://github.com/luquinhasxDEV/PortifolioPessoal'
    }, 
    {
      title: 'Primeiro CRUD',
      image: crud,
      description: 'Sistema de cadastro e login básicos para testar conhecimentos de Backend, Banco de dados e Frontend integrados, utilizando frameworks novos.',
      techs: [
        { name: 'Java', color: 'border-orange-500/50' },
        { name: 'React.js', color: 'border-yellow-500/50' },
        { name: 'Tailwind.CSS', color: 'border-blue-500/50' },
        { name: 'HTML', color: 'border-blue-500/50' }
      ],
      github: 'https://github.com/luquinhasxDEV/primeiroCRUD'
    }
  ];

  return (
    <section id="projetos" className="py-20 px-8 bg-[#030712]">
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Projetos em Destaque</h2>
          <p className="text-gray-400 text-sm mt-1">
            Projetos reais, aplicações backend e interfaces que desenvolvi.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-[#374151] snap-x">
          {projectsList.map((project, index) => (
            <div 
              key={index} 
              className="min-w-[340px] md:min-w-[380px] max-w-[400px] bg-[#111827] border border-[#374151] rounded-2xl p-5 flex flex-col justify-between snap-start flex-shrink-0"
            >
              <div className="space-y-4">
                {/* Renderização da Imagem do Projeto */}
                <div className="w-full h-44 bg-[#1E293B] rounded-xl overflow-hidden border border-[#374151]/50">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techs.map((t, i) => (
                    <span 
                      key={i} 
                      className={`text-xs text-white px-3 py-1 rounded-full bg-[#1E293B] border ${t.color}`}
                    >
                      {t.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="block text-center w-full bg-white text-black font-bold text-sm py-2.5 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Ver Código / GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}