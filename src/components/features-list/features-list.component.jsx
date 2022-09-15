import Features from '../features/features.component';

// Icons downloaded from https://iconscout.com/icons/
import icon1 from '../../assets/responsive-design.svg';
import icon2 from '../../assets/infinity.svg';
import icon3 from '../../assets/social-promotion.svg';

import './features-list.styles.css';

export default function FeaturesList() {
  return (
    <div className='features-list-container'>
      <Features
        image={icon1}
        title='100% Responsive'
        text="No matter the device you're on, our site is fully responsive and stories look beautiful on any screen."
      />
      <Features
        image={icon2}
        title='No Photo Upload Limit'
        text='Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
      />
      <Features
        image={icon3}
        title='Available to Embed'
        text='Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.'
      />
    </div>
  );
}
