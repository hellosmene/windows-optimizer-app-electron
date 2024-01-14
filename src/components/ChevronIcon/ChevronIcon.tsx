import './ChevronIcon.css';

type ChevronIconProps = {
  left?: boolean,
  top?: boolean,
  bottom?: boolean,
  onClick?: () => void
};

const ChevronIcon = ({ left, top, bottom, onClick }: ChevronIconProps) => {
  let className = 'chevron-icon ';
  if (left) {
    className += 'chevron-icon--left';
  } else if (top) {
    className += 'chevron-icon--top';
  } else if (bottom) {
    className += 'chevron-icon--bottom';
  }

  return (
    <svg className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' onClick={onClick}>
      <path d='M9 18L15 12L9 6' stroke='#6F767E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/>
    </svg>
  );
}

export default ChevronIcon;