import GridSection from '../grid-section/grid-section.component';
import { compare } from '../../../constants';

import './grid.styles.css';

export default function Grid() {
  return (
    <div className='center'>
      <h2 className='grid-header hidden'>COMPARE</h2>
      <div className='grid-container'>
        <h4 className='grid-title'>The features</h4>
        <h4 className='grid-title hidden'>Basic</h4>
        <h4 className='grid-title hidden'>Pro</h4>
        <h4 className='grid-title hidden'>Business</h4>
        <div className='screen-medium'>
          {compare.map(item => (
            <GridSection
              key={item.id}
              title={item.title}
              basic={item.basic}
              pro={item.pro}
              business={item.business}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
