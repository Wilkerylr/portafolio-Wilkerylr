import AvatarPlaceholder from './AvatarPlaceholder.jsx';
import '../styles/Hero.css';

// Componente de sección hero con presentación personal
const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        {/* Avatar de perfil - reemplazar AvatarPlaceholder por <img> cuando tengas foto */}
        <div className="hero-left">
          <AvatarPlaceholder />
        </div>

        {/* Texto de presentación */}
        <div className="hero-right">
          <h1>Hola, soy <span className="highlight">Wilker Lopez</span></h1>
          <p>Desarrollador apasionado por la precisión y el código limpio.</p>
          <a href="#repositorios" className="btn-main">Ver Repositorios</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
