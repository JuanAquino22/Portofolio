const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-6">
      <div className="container text-center">
        <p className="text-sm">© 2025 Juan Aquino. Todos los derechos reservados.</p>
        <ul className="flex justify-center space-x-4 mt-4">
          <li>
            <a
              href="https://github.com/JuanAquino22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 flex items-center space-x-2"
            >
              <i className="fab fa-github"></i>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/juanaquino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 flex items-center space-x-2"
            >
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;