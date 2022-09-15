import './features.styles.css';

export default function Features(props) {
  return (
    <div className='features-container'>
      <img className='features-icon' src={props.image} alt={props.alt} />
      <h3 className='features-title'>{props.title}</h3>
      <p className='features-text'>{props.text}</p>
    </div>
  );
}
