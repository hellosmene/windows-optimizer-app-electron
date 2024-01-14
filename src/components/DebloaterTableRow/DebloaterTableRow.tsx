import CheckBox from '../CheckBox/CheckBox';
import TableRow from '../TableRow/TableRow';
import IconButton from '../IconButton/IconButton';
import TrashCan from '../../assets/icons/trash-can.svg';
import './DebloaterTableRow.css';

type DebloaterTableRowProps = {
  id: string,
  name: string,
  header?: boolean,
  onCheck?: (checked: boolean) => void,
  onDelete?: (id: string) => void 
}

const DebloaterTableRow = ({ id, name, header, onCheck, onDelete }: DebloaterTableRowProps) => {
  const onTrashCanClick = () => {
    if (onDelete !== undefined && typeof onDelete == 'function') onDelete(id);
  }

  return (
    <TableRow
      header={header}
      fields={(
        <>
          <CheckBox onCheck={onCheck} />
          <div className='table-row__id'>{id}</div>
          <div className='table-row__name'>{name}</div>
        </>
      )}
      right={(
        <IconButton 
          icon={TrashCan} 
          width={24} 
          height={24} 
          disabled={header}
          onClick={onTrashCanClick}
        />
      )}
    />
  );
}

export default DebloaterTableRow;