import { useEffect } from 'react';
import Section from '../home/section/section.component';
import PricingCardList from './pricing-card-list/pricing-card-list.component';
import Table from './table/table.component';
import CallToAction from '../shared/call-to-action/call-to-action.component';
import Footer from '../shared/footer/footer.component';
import { pricingSection } from '../../constants';

export default function Pricing() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <Section
        image={pricingSection.image}
        title={pricingSection.title}
        theme={pricingSection.theme}
        type={pricingSection.type}
        text={pricingSection.text}
      />
      <PricingCardList />
      <Table />
      <CallToAction />
      <Footer />
    </main>
  );
}
