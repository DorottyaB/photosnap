import { useEffect } from 'react';

import Section from '../section/section.component';
import CardList from '../card-list/card-list.component';
import FeaturesList from '../features-list/features-list.component';
import Footer from '../footer/footer.component';

import photo1 from '../../assets/home/create-and-share.jpg';
import photo2 from '../../assets/home/beautiful-stories.jpg';
import photo3 from '../../assets/home/designed-for-everyone.jpg';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <Section
        title='Create and share your photo stories.'
        text='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        buttonText='Get an invite'
        buttonType='default'
        image={photo1}
        theme='dark'
        type='inverted'
      />

      <Section
        title='Beautiful stories every time'
        text='We provide design templates to ensure your stories look terrific. Easly add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        buttonText='View the stories'
        buttonType='default'
        image={photo2}
        type=''
      />

      <Section
        title='Designed for everyone'
        text='Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.'
        buttonText='View the stories'
        buttonType='default'
        image={photo3}
        type='inverted'
      />

      <CardList n='4' type='main' />
      <FeaturesList />
      <Footer />
    </main>
  );
}
