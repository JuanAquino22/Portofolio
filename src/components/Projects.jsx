const Projects = () => {
  return (
    <section id="projects" className="bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 border rounded-lg shadow-md">
            <img src="/images/vicase.png" alt="VICASE" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">VICASE (Helmet Detection System)</h3>
            <p className="text-gray-600">Un sistema de detección de cascos de seguridad utilizando OpenCV y TensorFlow.</p>
          </div>
          <div className="card p-6 border rounded-lg shadow-md">
            <img src="/images/chatbot.png" alt="Chatbot" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Chatbot de servicio al cliente</h3>
            <p className="text-gray-600">Un sistema basado en NLP desarrollado con Django, Celery y Redis.</p>
          </div>
          <div className="card p-6 border rounded-lg shadow-md">
            <img src="/images/predictive-models.png" alt="Modelos predictivos" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Modelos predictivos</h3>
            <p className="text-gray-600">Desarrollo de modelos de IA para tareas de predicción utilizando técnicas de machine learning.</p>
          </div>
          {/* Nuevo Proyecto */}
          <div className="card p-6 border rounded-lg shadow-md">
            <img src="/images/recommendation-system.png" alt="Sistema de Recomendación de Productos" className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Sistema de Recomendación de Productos</h3>
            <p className="text-gray-600">Un sistema basado en filtrado colaborativo y técnicas de aprendizaje automático para recomendar productos a los usuarios.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
