import { Link } from 'react-router-dom';

import './button.styles.css';

export default function Button(props) {
  return (
    <Link to={props.url} className={`button ${props.theme} ${props.buttonType}`}>
      {props.buttonText} <span className='button--icon'>&rarr;</span>
    </Link>
  );
}
