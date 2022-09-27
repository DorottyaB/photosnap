import GridSection from '../grid-section/grid-section.component';

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
          <GridSection title='UNLIMITED STORY POSTING' basic={true} pro={true} business={true} />
          <GridSection title='UNLIMITED PHOTO UPLOAD' basic={true} pro={true} business={true} />
          <GridSection title='EMBEDDING CUSTOM CONTENT' basic={false} pro={true} business={true} />
          <GridSection title='CUSTOMIZE METADATA' basic={false} pro={true} business={true} />
          <GridSection title='ADVANCED METRICS' basic={false} pro={false} business={true} />
          <GridSection title='PHOTO DOWNLOADS' basic={false} pro={false} business={true} />
          <GridSection title='SEARCH ENGINE INDEXING' basic={false} pro={false} business={true} />
          <GridSection title='CUSTOM ANALYTICS' basic={false} pro={false} business={true} />
        </div>
      </div>
    </div>
  );
}
