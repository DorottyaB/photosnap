import checkmark from '../../../assets/pricing/check.svg';
import './grid-section.styles.css';

export default function GridSection(props) {
  return (
    <div className='grid-section'>
      <h6>{props.title}</h6>
      <p className='grid-subtitle'>BASIC</p>
      <p className='grid-subtitle'>PRO</p>
      <p className='grid-subtitle'>BUSINESS</p>
      <img src={props.basic ? checkmark : ''} alt='' />
      <img src={props.pro ? checkmark : ''} alt='' />
      <img src={props.business ? checkmark : ''} alt='' />
    </div>
  );
}
