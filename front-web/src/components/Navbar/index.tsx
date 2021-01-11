import './styles.css';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

function Navbar() {
  return (
    <nav className="main-navbar">
      <Logo />
      <a href="" className="logo-text">
        PHP-Delivery
      </a>
    </nav>
  );
}

export default Navbar;
