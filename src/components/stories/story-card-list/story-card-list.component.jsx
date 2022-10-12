import StoryCard from '../story-card/story-card.component';

import stories from '../../../data';

import './story-card-list.styles.css';

export default function StoryCardList(props) {
  return (
    <div className='card-list-container'>
      {stories.slice(0, props.n).map(item => (
        <StoryCard
          type={props.type}
          key={item.id}
          date={item.date}
          title={item.title}
          author={item.author}
          imageUrl={item.imageUrl}
          url={item.url}
        />
      ))}
    </div>
  );
}
