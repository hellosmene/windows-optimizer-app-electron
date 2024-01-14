import { useState } from 'react';

import ChevronIcon from '../ChevronIcon/ChevronIcon';
import RadioButton from '../RadioButton/RadioButton';
import './DropDown.css';

type DropDownProps = {
  className?: string,
  options: string[],
  selectedIdx: number,
  onChange?: (idx: number) => void
}

const DropDown = ({ className, options, selectedIdx, onChange }: DropDownProps) => {
  const [active, setActive] = useState(false);

  const handleToggleMenu = () => setActive(prevActive => !prevActive);

  const handleChangeOption = (idx: number) => {
    if (onChange !== undefined && typeof onChange === 'function') onChange(idx);
  }

  return (
    <div className={`drop-down ${active ? 'drop-down--active' : ''} ${className}`}>
      <div className='drop-down__selected-item' onClick={handleToggleMenu}>
        <div className='footnote-bold'>{options[selectedIdx]}</div>
        <ChevronIcon bottom={!active} top={active} />
      </div>

      <div className='drop-down__options-container'>
        {options.map((option, index) => (
          <label className='drop-down__option' onClick={setActive.bind(this, false)}>
            <div className='caption1-bold'>{option}</div>
            <RadioButton 
              name='luca'
              checked={selectedIdx === index}
              onChange={handleChangeOption.bind(this, index)} 
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default DropDown;