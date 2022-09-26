import './feature.styles.css';

export default function Feature(props) {
  return (
    <div className='feature-container'>
      <img className='feature-icon' src={props.image} alt={props.alt} />
      <h3 className='feature-title'>{props.title}</h3>
      <p className='feature-text'>{props.text}</p>
    </div>
  );
}
