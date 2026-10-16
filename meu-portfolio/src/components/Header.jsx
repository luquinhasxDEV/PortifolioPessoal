export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030712]/80 backdrop-blur-md border-b border-[#374151]/50 px-8 py-4 flex justify-between items-center">
      <span className="text-xl font-bold text-white tracking-wide">
        Lucas Oliveira
      </span>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
        <a href="#sobre" className="hover:text-white transition-colors">Sobre mim</a>
        <a href="#conhecimentos" className="hover:text-white transition-colors">Conhecimentos</a>
        <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
      </nav>
      <a 
        href="#contato" 
        className="bg-white text-black text-sm font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition-colors"
      >
        Entre em contato
      </a>
    </header>
  );
}