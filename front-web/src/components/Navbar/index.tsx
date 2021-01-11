import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg';
import './styles.css';

function Navbar() {
  return (
    <nav className="main-navbar">
      <LogoIcon />
      <Link to="/" className="logo-text">
        PHP-Delivery
      </Link>
    </nav>
  );
}

export default Navbar;
