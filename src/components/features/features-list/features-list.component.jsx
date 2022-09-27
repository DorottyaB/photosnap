import Feature from '../feature/feature.component';

import icon1 from '../../../assets/features/responsive.svg';
import icon2 from '../../../assets/features/no-limit.svg';
import icon3 from '../../../assets/features/embed.svg';
import icon4 from '../../../assets/features/custom-domain.svg';
import icon5 from '../../../assets/features/boost-exposure.svg';
import icon6 from '../../../assets/features/drag-drop.svg';

import './features-list.styles.css';

export default function FeaturesList(props) {
  const features = [
    {
      image: icon1,
      title: '100% Responsive',
      text: "No matter the device you're on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      image: icon2,
      title: 'No Photo Upload Limit',
      text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      image: icon3,
      title: 'Available to Embed',
      text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    },
    {
      image: icon4,
      title: 'Custom Domain',
      text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    },
    {
      image: icon5,
      title: 'Boost Your Exposure',
      text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    },
    {
      image: icon6,
      title: 'Drag & Drop Image',
      text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    },
  ];

  const preview = features
    .slice(0, 3)
    .map(item => (
      <Feature key={item.title} image={item.image} title={item.title} text={item.text} />
    ));

  const allFeatures = features.map(item => (
    <Feature key={item.title} image={item.image} title={item.title} text={item.text} />
  ));

  return (
    <div className={`features-list-container ${props.all === true ? 'col-2' : ''}`}>
      {props.all === true ? allFeatures : preview}
    </div>
  );
}
