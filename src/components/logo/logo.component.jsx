import { ReactComponent as LogoIcon } from '../../assets/logo-filled.svg';
import './logo.styles.css';

export default function Logo(props) {
  return (
    <div className='logo-container'>
      <a href='/' className={`logo--text ${props.theme}`}>
        <LogoIcon className='logo--icon' />
        PHOTOSNAP
      </a>
    </div>
  );
}