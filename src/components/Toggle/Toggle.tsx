import React, { useId } from 'react';
import './Toggle.css';

type ToggleProps = {
  enabled?: boolean,
  onToggle?: (checked: boolean) => void
};

const Toggle = ({ enabled, onToggle }: ToggleProps) => {
  const id = useId();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onToggle !== undefined && typeof onToggle === 'function') onToggle(e.target.checked);
  }

  return (
    <label className='toggle' htmlFor={id}>
      <input 
        className='toggle__input' 
        type='checkbox' 
        id={id}
        checked={enabled}
        onChange={onChange}
      />
    </label>
  );
}

export default Toggle;