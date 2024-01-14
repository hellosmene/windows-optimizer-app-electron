import React, { useId } from 'react';

import './RadioButton.css';

type RadioButtonProps = {
  name: string,
  checked?: boolean,
  onChange?: (checked: boolean) => void
};

const RadioButton = ({ name, checked, onChange }: RadioButtonProps) => {
  const id = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange !== undefined && typeof onChange === 'function') onChange(e.target.checked);
  }

  return (
    <label className='radio-button' htmlFor={id}>
      <input 
        className='radio-button__input' 
        type='radio' 
        name={name} 
        id={id}
        checked={checked}
        onChange={handleChange}
      />
    </label>
  );
}

export default RadioButton;