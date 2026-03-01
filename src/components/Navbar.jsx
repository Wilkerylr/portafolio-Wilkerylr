import { useClock } from '../hooks/useClock';
import '../styles/Navbar.css';

const Navbar = ({ theme, onToggleTheme }) => {
  const time = useClock();

  return (
    <nav className="navbar">
      <div className="logo">
        TEMA
        <button 
          id="tema_Change" 
          className={theme === 'claro' ? 'right' : ''}
          onClick={onToggleTheme}
        />
      </div>
      <div id="reloj" className="reloj-display">{time}</div>
    </nav>
  );
};

export default Navbar;
