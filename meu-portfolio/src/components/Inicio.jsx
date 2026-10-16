import euzin from '../assets/euzin.jpg';

export default function Inicio() {
  return (
    <section id="sobre" className="pt-32 pb-20 px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 space-y-6">
        <span className="inline-block bg-[#1E293B] text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full border border-[#374151]">
          👋 Olá, sou
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Lucas Santos Oliveira
        </h1>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl">
          Estudante de Engenharia de Software e Técnico em Desenvolvimento de Sistemas. Apaixonado por desenvolvimento backend em Java, arquitetura de software, SQL e construção de interfaces web modernas com React.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <a 
            href="#projetos" 
            className="bg-white text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Ver Projetos
          </a>
          <a 
            href="#contato" 
            className="border border-[#374151] text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#1E293B] transition-colors"
          >
            Contatos
          </a>
        </div>
      </div>
      
      {/* Container da foto de perfil */}
      <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#1E293B] shadow-2xl flex-shrink-0 bg-[#1E293B]">
        <img 
          src={euzin} 
          alt="Lucas Santos Oliveira" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}