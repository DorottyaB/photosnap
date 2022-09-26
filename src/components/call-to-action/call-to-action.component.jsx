import Button from '../button/button.component';

import './call-to-action.styles.css';

export default function CallToAction() {
  return (
    <div className='cta-container'>
      <div className='cta-border'></div>
      <div className='background-image-container'>
        <div className='cta-text-container'>
          <h2 className='cta-text'>We're in beta.</h2>
          <h2 className='cta-text'>Get your invite today!</h2>
        </div>
        <Button buttonType='default' theme='dark' buttonText='Get an invite' />
      </div>
    </div>
  );
}
