import './pricing-card.styles.css';

export default function PricingCard(props) {
  return (
    <div className={`pricing-card-container ${props.planType}`}>
      <div className='pricing-card-border'></div>
      <div>
        <h4 className='pricing-plan-title'>{props.planType}</h4>
        <p className='pricing-plan-text'>{props.text}</p>
      </div>
      <div>
        <h3 className='price'>${props.price}</h3>
        <p className='time-period'>per {props.timePeriod}</p>
      </div>
      <button className='pricing-button'>Pick plan</button>
    </div>
  );
}
