import Button from '../../shared/button/button.component';

import './section.styles.css';

export default function Section(props) {
  return (
    <section className={`section-container ${props.type}`}>
      <div className='image-container'>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={`text-container ${props.theme}`}>
        <div className='section-border'></div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        {props.buttonText && (
          <Button buttonText={props.buttonText} theme={props.theme} buttonType='default' />
        )}
      </div>
    </section>
  );
}
