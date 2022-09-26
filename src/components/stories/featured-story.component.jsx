import Button from '../button/button.component';
import './featured-story.style.css';

export default function FeaturedStory(props) {
  return (
    <div className='story-image-container' style={{ backgroundImage: `url(${props.imageUrl})` }}>
      <div className='story-text-container'>
        <p className='uppercase'>Last month's featured story</p>
        <h1>{props.title}</h1>
        <p className='story-details'>
          {props.date} <span>by {props.author}</span>
        </p>
        <p className='story-text'>{props.text}</p>
        <Button buttonText='Read the story' theme='dark' buttonType='default' />
      </div>
    </div>
  );
}
