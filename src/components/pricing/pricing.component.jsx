import { useEffect } from 'react';
import Section from '../home/section/section.component';

import hero from '../../assets/pricing/hero.jpg';
import PricingCardList from './pricing-card-list/pricing-card-list.component';
import Grid from './grid/grid.component';
import CallToAction from '../shared/call-to-action/call-to-action.component';
import Footer from '../shared/footer/footer.component';

export default function Pricing() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <Section
        image={hero}
        title='Pricing'
        theme='dark'
        type='features'
        text="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos."
      />
      <PricingCardList />
      <Grid />
      <CallToAction />
      <Footer />
    </main>
  );
}
