import NavItem from '../NavItem/NavItem';
import './SideBar.css';

const TestLogo = () => (
  <svg width='48' height='48' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
  <g clip-path='url(#clip0_102_3)'>
    <g filter='url(#filter0_ii_102_3)'>
      <path d='M20 2.3094C22.4752 0.880339 25.5248 0.880339 28 2.3094L40.7846 9.6906C43.2598 11.1197 44.7846 13.7607 44.7846 16.6188V31.3812C44.7846 34.2393 43.2598 36.8803 40.7846 38.3094L28 45.6906C25.5248 47.1197 22.4752 47.1197 20 45.6906L7.21539 38.3094C4.74018 36.8803 3.21539 34.2393 3.21539 31.3812V16.6188C3.21539 13.7607 4.74018 11.1197 7.21539 9.6906L20 2.3094Z' fill='#FCFCFC'/>
    </g>
    <rect x='22' y='18' width='4' height='12' rx='2' fill='#1A1D1F'/>
  </g>
  <defs>
    <filter id='filter0_ii_102_3' x='3.21539' y='0.23761' width='41.5692' height='47.5248' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
      <feFlood flood-opacity='0' result='BackgroundImageFix'/>
      <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape'/>
      <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
      <feOffset dy='-1'/>
      <feGaussianBlur stdDeviation='1'/>
      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/>
      <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.41 0'/>
      <feBlend mode='multiply' in2='shape' result='effect1_innerShadow_102_3'/>
      <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/>
      <feOffset dy='1'/>
      <feGaussianBlur stdDeviation='0.5'/>
      <feComposite in2='hardAlpha' operator='arithmetic' k2='-1' k3='1'/>
      <feColorMatrix type='matrix' values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0'/>
      <feBlend mode='normal' in2='effect1_innerShadow_102_3' result='effect2_innerShadow_102_3'/>
    </filter>
    <clipPath id='clip0_102_3'>
      <rect width='48' height='48' fill='white'/>
    </clipPath>
  </defs>
</svg>
);

const SideBar = () => (
  <div className='side-bar'>
    <div className='side-bar__top'>
      <TestLogo />
      <div className='side-bar__nav-stack'>
        <NavItem title='General' to='/general' />
        <NavItem title='Latency' to='/latency' />
        <NavItem title='Debloater' to='/debloater' />
        <NavItem title='Services' to='/services' />
        <NavItem title='System Info' to='/systeminfo' />
      </div>
    </div>
  </div>
);

export default SideBar;