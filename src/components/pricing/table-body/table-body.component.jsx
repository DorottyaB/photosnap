import checkmark from '../../../assets/pricing/check.svg';
import './table-body.styles.css';

export default function TableBody(props) {
  return (
    <>
      <tr>
        <th>{props.title}</th>
        <td datacell='basic'>
          <img src={props.basic ? checkmark : ''} alt='' />
        </td>
        <td datacell='pro'>
          <img src={props.pro ? checkmark : ''} alt='' />
        </td>
        <td datacell='business'>
          <img src={props.business ? checkmark : ''} alt='' />
        </td>
      </tr>
    </>
  );
}
