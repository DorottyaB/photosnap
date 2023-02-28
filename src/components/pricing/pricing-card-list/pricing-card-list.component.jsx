import { useState } from 'react';
import PricingCard from '../pricing-card/pricing-card.component';
import { pricing } from '../../../constants';
import './pricing-card-list.styles.css';

export default function PricingCardList() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='pricing-card-list-container'>
      <div className='toggle-switch'>
        <span className={`${isChecked ? '' : 'active'}`}>Monthly</span>
        <label className='switch'>
          <input
            onClick={() => {
              setIsChecked(!isChecked);
            }}
            type='checkbox'
          />
          <span className='slider round'></span>
        </label>
        <span className={`${isChecked ? 'active' : ''}`}>Yearly</span>
      </div>
      <div className='pricing-cards-container'>
        {pricing.map(item => (
          <PricingCard
            key={item.id}
            plan={item.plan}
            text={item.text}
            price={isChecked ? item.price.yearly : item.price.monthly}
            timePeriod={isChecked ? 'year' : 'month'}
          />
        ))}
      </div>
    </div>
  );
}
