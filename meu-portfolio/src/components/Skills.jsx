export default function Skills() {
  const backendTechs = ['Java', 'POO', 'SpringBoot', 'PostgreSQL'];
  const frontendTechs = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React.js', 'Tailwind CSS'];
  const toolTechs = ['Figma UI', 'Git/GitHub'];

  return (
    <section id="conhecimentos" className="bg-[#0F172A] py-20 px-8 border-y border-[#374151]/30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h2 className="text-3xl font-bold text-white">Principais Conhecimentos</h2>
          <p className="text-gray-400 text-sm mt-1">
            Tecnologias e conhecimentos que aplico no desenvolvimento de software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              💻 Hard Skills
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {backendTechs.map((tech) => (
                <span key={tech} className="bg-[#1E293B] text-white text-sm font-medium px-4 py-2 rounded-full border border-blue-500/50">
                  {tech}
                </span>
              ))}
              {frontendTechs.map((tech) => (
                <span key={tech} className="bg-[#1E293B] text-white text-sm font-medium px-4 py-2 rounded-full border border-purple-500/50">
                  {tech}
                </span>
              ))}
              {toolTechs.map((tech) => (
                <span key={tech} className="bg-[#1E293B] text-white text-sm font-medium px-4 py-2 rounded-full border border-emerald-500/50">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              🎓 Formações Acadêmicas
            </h3>
            
            <div className="space-y-4">
              <div className="bg-[#1E293B] p-5 rounded-2xl border border-[#374151]">
                <h4 className="text-white font-bold text-base">Engenharia de Software</h4>
                <p className="text-gray-400 text-sm mt-1">Universidade Católica do Salvador — Em andamento</p>
                <span className="text-xs text-gray-500 block mt-2">Previsão de Término — 12/2029</span>
              </div>

              <div className="bg-[#1E293B] p-5 rounded-2xl border border-[#374151]">
                <h4 className="text-white font-bold text-base">Desenvolvimento de Sistemas</h4>
                <p className="text-gray-400 text-sm mt-1">SENAI Lauro de Freitas — Concluído</p>
                <span className="text-xs text-gray-500 block mt-2">Data de Conclusão — 12/2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}