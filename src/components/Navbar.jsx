import { useClock } from '../hooks/useClock';
import '../styles/Navbar.css';

// Componente de barra de navegación con reloj y botón de cambio de tema
const Navbar = ({ theme, onToggleTheme }) => {
  // Hook personalizado que actualiza la hora cada segundo
  const time = useClock();

  return (
    <nav className="navbar">
      <div className="logo">
        TEMA
        {/* Botón para alternar entre tema claro y oscuro */}
        <button
          id="tema_Change"
          aria-label={`Cambiar a tema ${theme === 'claro' ? 'oscuro' : 'claro'}`}
          className={theme === 'claro' ? 'right' : ''}
          onClick={onToggleTheme}
        />
      </div>
      {/* Reloj en tiempo real */}
      <div aria-live="polite" aria-label="Reloj" className="reloj-display">
        {time}
      </div>
    </nav>
  );
};

export default Navbar;
