import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import logoS from '../../assets/images/logo-s.png';
import logoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={logoS} alt='logo' />
        <img className='sub-logo' src={logoSubtitle} alt='logoSub' />
      </Link>
      <nav>
        {/* @ts-ignore */}
        <NavLink exact='true' activeclassname='active' to='/'>
          <FontAwesomeIcon icon={faHome} color='#4D4D4E' />
        </NavLink>
        <NavLink activeClassName='active' className='about-link' to='/about'>
          <FontAwesomeIcon icon={faUser} color='#4D4D4E' />
        </NavLink>
        <NavLink
          activeClassName='active'
          className='contact-link'
          to='/contact'>
          <FontAwesomeIcon icon={faEnvelope} color='#4D4D4E' />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} color='#4D4D4E' />
          </a>
        </li>
        <li>
          <a href='https://github.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faGithub} color='#4D4D4E' />
          </a>
        </li>
        <li>
          <a href='https://twitter.com' target='_blank' rel='noreferrer'>
            <FontAwesomeIcon icon={faTwitter} color='#4D4D4E' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
