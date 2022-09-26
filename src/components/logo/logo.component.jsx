import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../assets/shared/logo.svg';
import './logo.styles.css';

export default function Logo(props) {
  return (
    <div className='logo-container'>
      <Link to='/'>
        <LogoIcon className={`logo--icon ${props.theme}`} />
      </Link>
    </div>
  );
}
