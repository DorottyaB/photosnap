import Button from '../../shared/button/button.component';

import './story-card.styles.css';

export default function StoryCard(props) {
  return (
    <div
      key={props.id}
      className={`card-container ${props.type}`}
      style={{ backgroundImage: `url(${props.imageUrl})` }}
    >
      <div className='overlay'>
        <p className='card-date'>{props.date}</p>
        <h4>{props.title}</h4>
        <p className='card-author'>by {props.author}</p>
        <Button url={props.url} buttonText='Read story' theme='dark' buttonType='card-button' />
      </div>
    </div>
  );
}
