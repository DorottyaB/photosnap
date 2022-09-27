import { useState } from 'react';

import PricingCard from '../pricing-card/pricing-card.component';

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
        <PricingCard
          planType='basic'
          text='Includes basic usage of our platform. Recommended for new and aspiring photographers.'
          price={isChecked ? '190.00' : '19.00'}
          timePeriod={isChecked ? 'year' : 'month'}
        />
        <PricingCard
          planType='pro'
          text='More advanced features available. Recommended for photography veterans and professionals.'
          price={isChecked ? '390.00' : '39.00'}
          timePeriod={isChecked ? 'year' : 'month'}
        />
        <PricingCard
          planType='business'
          text='Additional features available such as more detailed metrics. Recommended for business owners.'
          price={isChecked ? '999.00' : '99.00'}
          timePeriod={isChecked ? 'year' : 'month'}
        />
      </div>
    </div>
  );
}
