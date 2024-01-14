import TableRow from '../TableRow/TableRow';
import CheckBox from '../CheckBox/CheckBox';
import DropDown from '../DropDown/DropDown';
import './ServicesTableRow.css';

type ServicesTableRowProps = {
  id?: string,
  name?: string,
  header?: boolean,
  onCheck?: (checked: boolean) => void,
  onDelete?: (id: string) => void 
}

const OPTIONS = ['Disable', 'Manual', 'Auto'];

const ServicesTableRow = ({ id, name, header }: ServicesTableRowProps) => (
  <TableRow
    header={header}
    fields={(
      <>
        <CheckBox />
        <div className='table-row__id'>{header ? 'ID' : id}</div>
        <div className='table-row__name'>{header ? 'Name' : id}</div>
        {
          header 
            ? <div className='table-row__status'>Status</div>
            : <DropDown className='table-row__drop-down' options={OPTIONS} selectedIdx={0} />
        }
        
      </>
    )}
    // right={(
    //   <>
    //   </>
    // )}
  />
);

export default ServicesTableRow;