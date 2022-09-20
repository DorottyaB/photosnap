import { useEffect } from 'react';

import FeaturedStory from './featured-story.component';
import CardList from '../card-list/card-list.component';
import Footer from '../footer/footer.component';

export default function Stories() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div>
      <FeaturedStory
        imageUrl='https://images.unsplash.com/photo-1652454159675-11ead6275680?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        title='Hazy Full Moon of Appalachia'
        date='March 2nd 2020'
        author='John Appleseed'
        text="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
      />
      <CardList n='17' type='stories' />
      <Footer />
    </div>
  );
}
