import Feature from '../feature/feature.component';
import { features } from '../../../constants';
import './features-list.styles.css';

export default function FeaturesList(props) {
  const preview = features
    .slice(0, 3)
    .map(item => <Feature key={item.id} image={item.image} title={item.title} text={item.text} />);

  const allFeatures = features.map(item => (
    <Feature key={item.id} image={item.image} title={item.title} text={item.text} />
  ));

  return (
    <div className={`features-list-container ${props.all === true ? 'col-2' : ''}`}>
      {props.all === true ? allFeatures : preview}
    </div>
  );
}
