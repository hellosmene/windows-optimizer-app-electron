import './SystemInfoCard.css';

type SystemInfoCardProps = {
  title: string,
  icon: any,
  items: string[]
};

const SystemInfoCard = ({ title, icon, items }: SystemInfoCardProps) => (
  <div className='system-info-card card'>
    <div className='system-info-card__top'>
      <div className='system-info-card__icon-wrapper'>
        <img src={icon} />
      </div>
      <div className='callout-bold'>{title}</div>
    </div>
    <ul className='system-info-card__list'>
      {
        items.map(item => (
          <li className='system-info-card__item caption1' key={item}>{item}</li>
        ))
      }
    </ul>
  </div>
);

export default SystemInfoCard;