import Card from '../card/card.component';

import './card-list.styles.css';

export default function CardList() {
  const stories = [
    {
      id: 1,
      title: 'The Mountains',
      author: 'John Appleseed',
      imageUrl:
        'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
    },
    {
      id: 2,
      title: 'Sunset Cityscapes',
      author: 'Benjamin Cruz',
      imageUrl:
        'https://images.unsplash.com/photo-1602521879205-9e43bd841b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
    },
    {
      id: 3,
      title: '18 Days Voyage',
      author: 'Alexei Borodin',
      imageUrl:
        'https://images.unsplash.com/photo-1616098851253-01a1e1570101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhpa2luZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
    },
    {
      id: 4,
      title: 'Architecturals',
      author: 'Samantha Brooke',
      imageUrl:
        'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
    },
  ];

  return (
    <div className='card-list-container'>
      {stories.map(story => (
        <Card key={story.id} title={story.title} author={story.author} imageUrl={story.imageUrl} />
      ))}
    </div>
  );
}
