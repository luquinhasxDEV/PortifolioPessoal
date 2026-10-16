import Header from './components/Header';
import Inicio from './components/Inicio';
import Skills from './components/Skills';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans">
      <Header />
      <main>
        <Inicio />
        <Skills />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}