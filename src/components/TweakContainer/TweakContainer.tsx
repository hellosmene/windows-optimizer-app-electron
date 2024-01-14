import type { PropsWithChildren } from 'react';

import './TweakContainer.css';

const TweakContainer = ({ children }: PropsWithChildren) => (
  <div className='tweak-container'>
    {children}
  </div>
);

export default TweakContainer;