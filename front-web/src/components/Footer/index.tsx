import { ReactComponent as YoutubeIcon } from '../../assets/Youtube.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/Linkedin.svg';
import { ReactComponent as InstagramIcon } from '../../assets/Instagram.svg';
import './styles.css';

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
          <LinkedinIcon />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig" target="_new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
