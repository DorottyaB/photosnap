import './button.styles.css';

export default function Button(props) {
  return (
    <button className={`button ${props.theme} ${props.buttonType}`}>
      {props.buttonText} <span className='button--icon'>&rarr;</span>
    </button>
  );
}
