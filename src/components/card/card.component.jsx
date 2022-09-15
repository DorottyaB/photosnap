import Button from '../button/button.component';

import './card.styles.css';

export default function Card(props) {
  return (
    <div
      key={props.id}
      className='card-container'
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <h4>{props.title}</h4>
      <p>by {props.author}</p>
      <Button buttonText='Read story' theme='dark' buttonType='card-button' />
    </div>
  );
}
