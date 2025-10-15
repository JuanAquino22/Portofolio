import perfilImg from './assets/Perfil2.jpeg';
import githubIcon from './assets/github.png';
import linkedinIcon from './assets/linkedin.png';
import huggingfaceIcon from './assets/hugginface.jpg';
import instagramIcon from './assets/logotipo-de-instagram.png';
import facebookIcon from './assets/facebook.png';

function App() {
  return (
    <div className="portfolio-container">
      {/* Header section */}
      <div className="header-section">
        <div className="profile-image">
          <img src={perfilImg} alt="Juan Aquino" className="profile-photo" />
        </div>
        <div className="header-text">
          <h1>JUAN JOSÉ AQUINO GUILLEN</h1>
          <p>
            Hola, soy Juan. Soy Lic. Analista en Sistemas Informáticos y un apasionado en inteligencia artificial y desarrollador de software.
          </p>
        </div>
      </div>

      {/* Social Links below header */}
      <div className="social-links">
        <a href="https://github.com/JuanAquino22" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a href="https://linkedin.com/in/juan-aquino-08262b197" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a href="https://huggingface.co/JuanAquino22" target="_blank" rel="noopener noreferrer">
          <img src={huggingfaceIcon} alt="Hugging Face" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/juan_aquinooo/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/share/p/1GzKt6myCV/" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
      </div>

      {/* Projects section */}
      <div className="section">
        <h2>PROYECTOS RECIENTES</h2>
        <div className="projects-grid">
          <div className="project-item">
            <h3 className="project-title">🔍 VICASE - Sistema de Detección de Cascos</h3>
            <p className="project-description">
              Sistema de detección de cascos de seguridad utilizando OpenCV y TensorFlow para mejorar la seguridad industrial.
            </p>
            <p className="project-meta">2024 • Computer Vision</p>
          </div>
          
          <div className="project-item">
            <h3 className="project-title">🤖 Chatbot de Servicio al Cliente</h3>
            <p className="project-description">
              Sistema basado en NLP desarrollado con Django, Celery y Redis para automatizar respuestas de soporte.
            </p>
            <p className="project-meta">2024 • NLP & Backend</p>
          </div>
          
          <div className="project-item">
            <h3 className="project-title">📊 Modelos Predictivos</h3>
            <p className="project-description">
              Desarrollo de modelos de Machine Learning para tareas de predicción y análisis de datos.
            </p>
            <p className="project-meta">2023-2024 • Machine Learning</p>
          </div>
          
          <div className="project-item">
            <h3 className="project-title">🛒 Sistema de Recomendación de Productos</h3>
            <p className="project-description">
              Un sistema basado en filtrado colaborativo y técnicas de aprendizaje automático para recomendar productos a los usuarios.
            </p>
            <p className="project-meta">2024 • Machine Learning & E-commerce</p>
          </div>
        </div>
      </div>

      {/* Achievements section */}
      <div className="section">
        <h2>LOGROS</h2>
        <div className="achievements-grid">
          <div className="achievement-item">
            <h3 className="achievement-title">🏆 <a href="https://www.ine.gov.py/noticias/2047/grupos-seleccionados-en-el-hackathon-ia-presentaron-sus-proyectos-ante-autoridades-del-ine-y-del-mitic" target="_blank" rel="noopener noreferrer">Hackathon IA - INE y MITIC</a></h3>
            <p className="achievement-description">Proyecto seleccionado en el hackathon nacional de inteligencia artificial</p>
          </div>
          <div className="achievement-item">
            <h3 className="achievement-title">📝 <a href="https://www.linkedin.com/posts/juan-aquino-08262b197_computervision-ai-django-activity-7353515528335822848-KJTF" target="_blank" rel="noopener noreferrer">Publicación Computer Vision</a></h3>
            <p className="achievement-description">Artículo sobre implementación de CV con Django</p>
          </div>
          <div className="achievement-item">
            <h3 className="achievement-title">🎓 <a href="https://www.linkedin.com/posts/juan-aquino-08262b197_el-2-de-agosto-defend%C3%AD-mi-tesis-y-oficialmente-activity-7374442841713864704-ClF3" target="_blank" rel="noopener noreferrer">Defensa de Tesis</a></h3>
            <p className="achievement-description">Graduación exitosa en Ingeniería en IA</p>
          </div>
          <div className="achievement-item">
            <h3 className="achievement-title">🎤 <a href="https://www.facebook.com/share/p/1ABVCLCxk4/" target="_blank" rel="noopener noreferrer">Entrevista en la radio</a></h3>
            <p className="achievement-description">Participación en entrevista radial sobre IA y tecnología</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>© Juan Aquino</p>
      </div>
    </div>
  );
}

export default App;
