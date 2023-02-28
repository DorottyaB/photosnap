import { useEffect } from 'react';
import FeaturedStory from './featured-story/featured-story.component';
import StoryCardList from './story-card-list/story-card-list.component';
import Footer from '../shared/footer/footer.component';
import { featuredStory } from '../../constants';

export default function Stories() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <FeaturedStory
        image={featuredStory.image}
        title={featuredStory.title}
        date={featuredStory.date}
        author={featuredStory.author}
        text={featuredStory.text}
      />
      <StoryCardList n='17' type='stories' />
      <Footer />
    </main>
  );
}
