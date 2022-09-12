import Section from '../section/Section.component';
import CardList from '../card-list/card-list.component';

import photo1 from '../../assets/photo-1.jpg';
import photo2 from '../../assets/photo-2.jpg';
import photo3 from '../../assets/photo-3.jpg';

export default function Main() {
  return (
    <main>
      <Section
        title='Create and share your photo stories.'
        text='Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'
        link='Get an invite'
        image={photo1}
        theme='dark'
      />

      <Section
        title='Beautiful stories every time'
        text='We provide design templates to ensure your stories look terrific. Easly add photos, text, embed maps and media from other networks. Then share your story with everyone.'
        link='View the stories'
        image={photo2}
        type='inverted'
      />

      <Section
        title='Designed for everyone'
        text='Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.'
        link='View the stories'
        image={photo3}
      />

      <CardList />
    </main>
  );
}
