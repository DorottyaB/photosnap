import Button from '../button/button.component';

import './section.styles.css';

export default function Section(props) {
  return (
    <section className={`section-container ${props.type}`}>
      <div className={`text-container ${props.theme}`}>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <Button buttonText={props.buttonText} theme={props.theme} buttonType='default' />
      </div>
      <div className='image-container'>
        <img src={props.image} alt='' />
      </div>
    </section>
  );
}
