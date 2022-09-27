import { useEffect } from 'react';

import FeaturedStory from './featured-story/featured-story.component';
import StoryCardList from './story-card-list/story-card-list.component';
import Footer from '../shared/footer/footer.component';

import storyImage from '../../assets/stories/moon-of-appalacia.jpg';

export default function Stories() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <FeaturedStory
        imageUrl={storyImage}
        title='Hazy Full Moon of Appalachia'
        date='March 2nd 2020'
        author='John Appleseed'
        text="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
      />
      <StoryCardList n='17' type='stories' />
      <Footer />
    </main>
  );
}
