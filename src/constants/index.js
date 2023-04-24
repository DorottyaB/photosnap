import photo1 from '../assets/home/create-and-share.jpg';
import photo2 from '../assets/home/beautiful-stories.jpg';
import photo3 from '../assets/home/designed-for-everyone.jpg';
import featuredImg from '../assets/stories/moon-of-appalacia.jpg';
import featuresHero from '../assets/features/hero.jpg';
import pricingHero from '../assets/pricing/hero.jpg';
import icon1 from '../assets/features/responsive.svg';
import icon2 from '../assets/features/no-limit.svg';
import icon3 from '../assets/features/embed.svg';
import icon4 from '../assets/features/custom-domain.svg';
import icon5 from '../assets/features/boost-exposure.svg';
import icon6 from '../assets/features/drag-drop.svg';

export const homeSections = [
  {
    id: 'homeSection-1',
    title: 'Create and share your photo stories.',
    text: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    buttonText: 'Get an invite',
    buttonType: 'default',
    image: photo1,
    theme: 'dark',
    type: 'inverted',
    url: '/',
  },
  {
    id: 'homeSection-2',
    title: 'Beautiful stories every time',
    text: 'We provide design templates to ensure your stories look terrific. Easly add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    buttonText: 'View the stories',
    buttonType: 'default',
    image: photo2,
    type: '',
    url: 'stories',
  },
  {
    id: 'homeSection-3',
    title: 'Designed for everyone',
    text: 'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
    buttonText: 'View the stories',
    buttonType: 'default',
    image: photo3,
    type: 'inverted',
    url: 'stories',
  },
];

export const stories = [
  {
    id: 'stories-1',
    title: 'The Mountains',
    author: 'John Appleseed',
    date: 'April 16th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    id: 'stories-2',
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    date: 'April 14th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1602521879205-9e43bd841b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 'stories-3',
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    date: 'April 11th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1616098851253-01a1e1570101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhpa2luZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 'stories-4',
    title: 'Architecturals',
    author: 'Samantha Brooke',
    date: 'April 8th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1548248823-ce16a73b6d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZXxlbnwwfDF8MHx8&auto=format&fit=crop&w=600&q=60',
  },
  {
    id: 'stories-5',
    title: 'World Tour 2019',
    author: 'Timothy Wagner',
    date: 'April 7th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1506038634487-60a69ae4b7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80',
  },
  {
    id: 'stories-6',
    title: 'Unforseen Conrners',
    author: 'William Malcolm',
    date: 'April 3rd 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/flagged/photo-1555556557-4878349d550e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 'stories-7',
    title: 'King on Africa: Part II',
    author: 'Tim Hillenburg',
    date: 'March 20th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1607274134639-043342705e6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 'stories-8',
    title: 'The Trip to Nowhere',
    author: 'Felicia Rourke',
    date: 'March 21st 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1526267888532-69091f908bf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 'stories-9',
    title: 'Rage of the Sea',
    author: 'Mohammed Abdul',
    date: 'March 19th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
  },
  {
    id: 'stories-10',
    title: 'Running Free',
    author: 'Michelle',
    date: 'March 16th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1633512423760-2b4f034994ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
  },
  {
    id: 'stories-11',
    title: 'Behind the Waves',
    author: 'Lamarr Wilson',
    date: 'March 11th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 'stories-12',
    title: 'Calm Waters',
    author: 'Samantha Brooke',
    date: 'March 9th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1529157096195-ad40a499ead2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
  },
  {
    id: 'stories-13',
    title: 'The Milky Way',
    author: 'Benjamin Cruz',
    date: 'March 5th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1531742896094-1424584e750b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 'stories-14',
    title: 'Night at the Dark Forest',
    author: 'Mohammed Abdul',
    date: 'March 4th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1518283157686-5a29b7f5b279?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 'stories-15',
    title: "Somwarpet's Beauty",
    author: 'Michelle',
    date: 'March 1st 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1559621455-00adbcb1054b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
  },
  {
    id: 'stories-16',
    title: 'Land of Dreams',
    author: 'William Malcolm',
    date: 'February 25th 2020',
    url: '',
    imageUrl:
      'https://images.unsplash.com/photo-1515835854292-afb3d11ec326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
];

export const featuredStory = {
  id: 'featuredStory',
  title: 'Hazy Full Moon of Appalachia',
  author: 'John Appleseed',
  date: 'March 2nd 2020',
  text: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
  url: '',
  image: featuredImg,
};

export const featuresSection = {
  id: 'featuresSection',
  type: 'features',
  theme: 'dark',
  title: 'Features',
  text: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
  image: featuresHero,
};

export const features = [
  {
    id: 'features-1',
    image: icon1,
    title: '100% Responsive',
    text: "No matter the device you're on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    id: 'features-2',
    image: icon2,
    title: 'No Photo Upload Limit',
    text: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
  },
  {
    id: 'features-3',
    image: icon3,
    title: 'Available to Embed',
    text: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
  },
  {
    id: 'features-4',
    image: icon4,
    title: 'Custom Domain',
    text: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
  },
  {
    id: 'features-5',
    image: icon5,
    title: 'Boost Your Exposure',
    text: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
  },
  {
    id: 'features-6',
    image: icon6,
    title: 'Drag & Drop Image',
    text: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
  },
];

export const pricingSection = {
  id: 'pricingSection',
  image: pricingHero,
  title: 'Pricing',
  theme: 'dark',
  type: 'features',
  text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It's the simple way to create and share your photos.",
};

export const pricing = [
  {
    id: 'pricing-1',
    plan: 'basic',
    text: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    price: {
      yearly: '190.00',
      monthly: '19.00',
    },
  },
  {
    id: 'pricing-2',
    plan: 'pro',
    text: 'More advanced features available. Recommended for photography veterans and professionals.',
    price: {
      yearly: '390.00',
      monthly: '39.00',
    },
  },
  {
    id: 'pricing-3',
    plan: 'business',
    text: 'Additional features available such as more detailed metrics. Recommended for business owners.',
    price: {
      yearly: '999.00',
      monthly: '99.00',
    },
  },
];

export const compare = [
  {
    id: 'compare-1',
    title: 'UNLIMITED STORY POSTING',
    basic: true,
    pro: true,
    business: true,
  },
  {
    id: 'compare-2',
    title: 'UNLIMITED PHOTO UPLOAD',
    basic: true,
    pro: true,
    business: true,
  },
  {
    id: 'compare-3',
    title: 'EMBEDDING CUSTOM CONTENT',
    basic: false,
    pro: true,
    business: true,
  },
  {
    id: 'compare-4',
    title: 'CUSTOMIZE METADATA',
    basic: false,
    pro: true,
    business: true,
  },
  {
    id: 'compare-5',
    title: 'ADVANCED METRICS',
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: 'compare-6',
    title: 'PHOTO DOWNLOADS',
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: 'compare-7',
    title: 'SEARCH ENGINE INDEXING',
    basic: false,
    pro: false,
    business: true,
  },
  {
    id: 'compare-8',
    title: 'CUSTOM ANALYTICS',
    basic: false,
    pro: false,
    business: true,
  },
];
