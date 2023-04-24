import TableBody from '../table-body/table-body.component';
import { compare } from '../../../constants';

import './table.styles.css';

export default function Table() {
  return (
    <div className='center'>
      <h2 className='table-title hidden'>COMPARE</h2>
      <table className='table-container'>
        <caption>The features</caption>
        <thead className='table-headers-medium'>
          <tr>
            <th className='table-header'>Basic</th>
            <th className='table-header'>Pro</th>
            <th className='table-header'>Business</th>
          </tr>
        </thead>
        <tbody>
          {compare.map(item => (
            <TableBody
              key={item.id}
              title={item.title}
              basic={item.basic}
              pro={item.pro}
              business={item.business}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
