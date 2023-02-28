import { useEffect } from 'react';
import Section from './section/section.component';
import CardList from '../stories/story-card-list/story-card-list.component';
import FeaturesList from '../features/features-list/features-list.component';
import Footer from '../shared/footer/footer.component';
import { homeSections } from '../../constants';

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      {homeSections.map(section => (
        <Section
          key={section.id}
          title={section.title}
          text={section.text}
          buttonText={section.buttonText}
          buttonType={section.buttonType}
          image={section.image}
          theme={section.theme}
          type={section.type}
          url={section.url}
        />
      ))}

      <CardList n='4' type='main' />
      <FeaturesList />
      <Footer />
    </main>
  );
}
