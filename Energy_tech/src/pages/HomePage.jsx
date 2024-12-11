import React from 'react';
import './HomePage.css';



const InfoBox = ({ title, description, className }) => (
  <div className={`info-box ${className}`}>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className='main-title'>Energías Renovables</h1>
      <h2 className='subtitle'>Descubre el Futuro Sostenible: Innovaciones y Beneficios de las Energías Renovables</h2>

      {/* Primer InfoBox con tamaño específico */}
      <div className="first-info-container">
        <InfoBox 
          title="Qué son las energías renovables" 
          description="Las energías renovables son fuentes de energía que se obtienen de recursos naturales que son inagotables o se reponen de manera constante en el tiempo. Son alternativas sostenibles a los combustibles fósiles tradicionales porque tienen un menor impacto ambiental, emiten menos gases de efecto invernadero y no se agotan con el uso."
          className="info-box-1"
        />
      </div>

      {/* Contenedor para los otros dos InfoBoxes */}
      <div className="other-info-container">
        <InfoBox 
          title="Ventajas" 
          description={
            <>
              <p>- Reducen las emisiones de gases de efecto invernadero.</p>
              <p>- Son inagotables y no dependen de recursos limitados.</p>
              <p>- Diversifican las fuentes de energía, lo que incrementa la seguridad energética.</p>
              <p>- Generan empleos verdes y fomentan la independencia energética.</p>
            </>
          }
        />
        <InfoBox 
          title="Desventajas" 
          description={
            <>
            <p>-Pueden depender de factores climáticos o geográficos (ejemplo: viento, sol).</p>
            <p>-Las instalaciones iniciales suelen ser costosas</p>
            <p>-Algunas tecnologías pueden afectar ecosistemas locales durante su implementación​</p>
            </>
          }
          className="info-box-3"
        />
      </div>
    </div>
  );
};

export default HomePage;




