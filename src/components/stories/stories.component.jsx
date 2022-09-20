import stories from '../../data';

import Card from '../card/card.component';
import Footer from '../footer/footer.component';

import '../card-list/card-list.styles.css';
import FeaturedStory from './featured-story.component';

export default function Stories() {
  return (
    <div>
      <FeaturedStory
        imageUrl='https://images.unsplash.com/photo-1652454159675-11ead6275680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        title='Hazy Full Moon of Appalachia'
        date='March 2nd 2020'
        author='John Appleseed'
        text="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
      />
      <div className='card-list-container'>
        {stories.map(story => (
          <Card
            key={story.id}
            title={story.title}
            author={story.author}
            date={story.date}
            imageUrl={story.imageUrl}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
