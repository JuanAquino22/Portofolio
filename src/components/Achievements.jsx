const Achievements = () => {
  return (
    <section id="achievements" className="py-16 bg-gray-100">
      <div className="container text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Logros</h2>
        <ul className="space-y-4">
          <li>
            <a
              href="https://www.linkedin.com/posts/juan-aquino-08262b197_computervision-ai-django-activity-7353515528335822848-KJTF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4wZKIB6msXUMw33mxS8GiLayvL8XSORaU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Publicación sobre Computer Vision y Django en LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.ine.gov.py/noticias/2047/grupos-seleccionados-en-el-hackathon-ia-presentaron-sus-proyectos-ante-autoridades-del-ine-y-del-mitic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Presentación de proyectos en el Hackathon IA del INE y MITIC
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/posts/juan-aquino-08262b197_el-2-de-agosto-defend%C3%AD-mi-tesis-y-oficialmente-activity-7374442841713864704-ClF3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC4wZKIB6msXUMw33mxS8GiLayvL8XSORaU"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Defensa de tesis y logro académico en LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/p/1GzKt6myCV/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Publicación en Facebook
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Achievements;