import { projects } from './data/projects';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-12">
      {/* Container Principal */}
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header / Hero Section */}
        <header className="space-y-4">
          <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">
            Desenvolvedor de Software
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Lucas Oliveira
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            Estudante de Engenharia de Software focado em criar aplicações robustas, 
            da modelagem de sistemas ao desenvolvimento de interfaces modernas.
          </p>
          
          <div className="flex gap-4 pt-2">
            <a 
              href="https://github.com/luquinhasxDEV" 
              target="_blank" 
              rel="noreferrer"
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition text-sm border border-slate-700"
            >
              GitHub
            </a>
            <a 
              href="#contato" 
              className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold rounded-lg transition text-sm"
            >
              Entrar em Contacto
            </a>
          </div>
        </header>

        {/* Seção de Tecnologias */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
            Principais Competências
          </h2>
          <div className="flex flex-wrap gap-2">
            {["Java", "POO", "React", "JavaScript", "SQL", "Git", "Figma", "Tailwind CSS"].map((skill) => (
              <span 
                key={skill} 
                className="bg-slate-900 text-slate-300 border border-slate-800 px-3 py-1 rounded-full text-sm font-mono"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Seção de Projetos */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-white border-b border-slate-800 pb-2">
            Projetos em Destaque
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech) => (
                      <span key={tech} className="bg-slate-800 text-cyan-400 text-xs px-2.5 py-1 rounded-md font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 text-sm font-medium border-t border-slate-800/80 pt-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition">
                      Repositório →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer / Contato */}
        <footer id="contato" className="pt-12 border-t border-slate-800 text-center text-slate-500 text-sm space-y-2">
          <p>Vamos conversar sobre novos projetos e oportunidades?</p>
          <p className="text-slate-400 font-mono">lucas.oliveira@email.com</p>
        </footer>

      </div>
    </div>
  );
}