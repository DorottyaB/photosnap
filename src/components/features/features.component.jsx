import { useEffect } from 'react';

import Footer from '../footer/footer.component';
import Section from '../section/section.component';

import hero from '../../assets/features/hero.jpg';
import FeaturesList from '../features-list/features-list.component';
import CallToAction from '../call-to-action/call-to-action.component';

export default function Features() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <Section
        type='features'
        theme='dark'
        title='Features'
        text='We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
        image={hero}
      />
      <FeaturesList all={true} />
      <CallToAction />
      <Footer />
    </main>
  );
}
