import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-4 shadow-md">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <h1 className="text-2xl font-bold text-gray-800">Juan Aquino</h1>
        </div>
        <nav>
          <button
            className="md:hidden text-gray-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex space-x-4 md:space-x-6 mt-4 md:mt-0`}
          >
            <li><a href="#about" className="text-gray-600 hover:text-blue-500">Sobre mí</a></li>
            <li><a href="#projects" className="text-gray-600 hover:text-blue-500">Proyectos</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-blue-500">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;