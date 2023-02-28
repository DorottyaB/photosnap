import { useEffect } from 'react';
import Footer from '../shared/footer/footer.component';
import Section from '../home/section/section.component';
import FeaturesList from './features-list/features-list.component';
import CallToAction from '../shared/call-to-action/call-to-action.component';
import { featuresSection } from '../../constants';

export default function Features() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main>
      <Section
        type={featuresSection.type}
        theme={featuresSection.theme}
        title={featuresSection.title}
        text={featuresSection.text}
        image={featuresSection.image}
      />
      <FeaturesList all={true} />
      <CallToAction />
      <Footer />
    </main>
  );
}
