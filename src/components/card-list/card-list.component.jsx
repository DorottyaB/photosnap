import Card from '../card/card.component';

import stories from '../../data';

import './card-list.styles.css';

export default function CardList(props) {
  return (
    <div className='card-list-container'>
      {stories.slice(0, props.n).map(item => (
        <Card
          type={props.type}
          key={item.id}
          date={item.date}
          title={item.title}
          author={item.author}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
