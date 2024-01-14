import React, { useId } from 'react';

import './CheckBox.css';

type CheckBoxProps = {
  checked?: boolean,
  onCheck?: (checked: boolean) => void
}

const CheckBox = ({ checked, onCheck }: CheckBoxProps) => {
  const id = useId();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onCheck !== undefined && typeof onCheck === 'function') onCheck(e.target.checked);
  }

  return (
    <label className='check-box' htmlFor={id}>
      <input 
        className='check-box__input' 
        type='checkbox' 
        id={id} 
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}

export default CheckBox;