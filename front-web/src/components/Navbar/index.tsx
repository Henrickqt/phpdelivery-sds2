import { ReactComponent as LogoIcon } from '../../assets/Logo.svg';
import './styles.css';

function Navbar() {
  return (
    <nav className="main-navbar">
      <LogoIcon />
      <a href="" className="logo-text">
        PHP-Delivery
      </a>
    </nav>
  );
}

export default Navbar;
