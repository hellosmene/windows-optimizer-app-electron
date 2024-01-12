import type { PropsWithChildren } from 'react';

import './ClickableCard.css';

type ClickableCardProps = PropsWithChildren<{
    onClick?: () => void
}>;

const ClickableCard = ({ children, onClick }: ClickableCardProps) => (
    <span className='clickable-card' onClick={onClick}>
        {children}
    </span>
);

export default ClickableCard;