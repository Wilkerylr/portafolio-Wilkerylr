import { useClock } from '../hooks/useClock';
<<<<<<< HEAD

// Componente de barra de navegación con reloj y botón de cambio de tema
const Navbar = ({ theme, onToggleTheme }) => {
  // Hook personalizado que actualiza la hora cada segundo
=======
import '../styles/Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
  const time = useClock();

  return (
    <nav className="navbar">
      <div className="logo">
        TEMA
<<<<<<< HEAD
        {/* Botón para alternar entre tema claro y oscuro */}
=======
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
        <button 
          id="tema_Change" 
          className={theme === 'claro' ? 'right' : ''}
          onClick={onToggleTheme}
        />
      </div>
<<<<<<< HEAD
      {/* Reloj en tiempo real */}
=======
>>>>>>> 8b30a99bc6ad3782820c60828ae1c43dc222d043
      <div id="reloj" className="reloj-display">{time}</div>
    </nav>
  );
};

export default Navbar;
