import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <div className="hero-left">
          <img 
            src="https://scontent.fccs10-1.fna.fbcdn.net/v/t39.30808-6/486246345_2969005076581391_7303019274851640943_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=knXvz0ZR6lEQ7kNvwGYsUej&_nc_oc=AdnozWxE87Uyt48ZG5mzOsXnPvXQTcBI6Lvj3anA5mS1SuTcxF3HDhXaaivWlABiubY&_nc_zt=23&_nc_ht=scontent.fccs10-1.fna&_nc_gid=NGj15Q4efvgcgvBDVvC6zA&oh=00_AfpWB9yffZkxwinEOOI50XRJgiBV5GbTioQewfyhuT9Tdw&oe=697DE120g" 
            alt="Foto de Wilker Lopez" 
            className="hero-img"
          />
        </div>
        <div className="hero-right">
          <h1>Hola, soy <span className="highlight">Wilker Lopez</span></h1>
          <p>Desarrollador apasionado por la precisión y el código limpio.</p>
          <a href="#proyectos" className="btn-main">Ver Proyectos</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
