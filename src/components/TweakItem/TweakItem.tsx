import { useState } from 'react';

import CheckBox from '../Toggle/Toggle';
import './TweakItem.css';

const TweakItem = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className='tweak-item card'>

      <div className='tweak-item__top'>
        <div className='callout-bold'>Optimize Performance</div>
        <CheckBox enabled={enabled} onToggle={setEnabled} />
      </div>

      <div className='tweak-item__description caption2'>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatus
      </div>
      
      <div className='subheadline-bold'>
        Status : <span className={`tweak-item__status-${enabled ? 'on' : 'off'}`}>{enabled ? 'ON' : 'OFF'}</span>
      </div>

    </div>
  );
}

export default TweakItem;