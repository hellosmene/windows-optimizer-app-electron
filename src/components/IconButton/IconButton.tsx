import './IconButton.css';

type IconButtonProps = {
  icon: any,
  width: number,
  height: number,
  disabled?: boolean,
  onClick?: () => void
};

const IconButton = ({ icon, width, height, disabled, onClick }: IconButtonProps) => (
  <div 
    className={`icon-button ${disabled ? 'icon-button--disabled' : ''}`}
    // style={{ width: `${width}px`, height: `${height}px` }}
    onClick={onClick}
  >
    <img className='icon-button__icon' src={icon} width={width} height={height} />
  </div>
);

export default IconButton;