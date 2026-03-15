import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Repositories from './components/Repositories.jsx';
import Footer from './components/Footer.jsx';
<<<<<<< HEAD
import './App.css';

// Componente principal de la aplicación
function App() {
  // Hook personalizado para manejar el tema (claro/oscuro)
=======
import './styles/variables.css';

function App() {
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
  const { theme, toggleTheme } = useTheme();

  return (
    <>
<<<<<<< HEAD
      {/* Barra de navegación con reloj y botón de tema */}
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        {/* Sección hero con presentación */}
        <Hero />
        {/* Fondo con gradiente decorativo */}
        <div id="container">
          <div id="Fondo_gradiente"></div>
        </div>
        {/* Sección de proyectos destacados */}
        <Projects />
        {/* Sección de repositorios de GitHub */}
        <Repositories />
        {/* Pie de página con información de contacto */}
=======
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <div id="container">
          <div id="Fondo_gradiente"></div>
        </div>
        <Projects />
        <Repositories />
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
        <Footer />
      </main>
    </>
  );
}

export default App;
