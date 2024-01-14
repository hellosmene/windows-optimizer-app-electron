import { useId } from 'react';

import './InputTextUnit.css';

const InputTextUnit = () => {
  const id = useId();

  return (
    <div className='input-text-unit'>
      <label className='input-text-unit__label' htmlFor={id}>Ignore Under</label>
      <div className='input-text-unit__input-container'>
        <input className='input-text-unit__input' type='text' id={id} />
        <div className='input-text-unit__unit'></div>
      </div>
    </div>
  );
}

export default InputTextUnit;