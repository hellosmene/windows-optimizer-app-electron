import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import SideBarLayout from './components/SideBarLayout/SideBarLayout';
import TweakContainer from './components/TweakContainer/TweakContainer';
import TweakItem from './components/TweakItem/TweakItem';
import Table from './components/Table/Table';
import SystemInfoCard from './components/SystemInfoCard/SystemInfoCard';
import DebloaterTableRow from './components/DebloaterTableRow/DebloaterTableRow';
import ServicesTableRow from './components/ServicesTableRow/ServicesTableRow';
import osLogo from './assets/icons/os.svg';

const GeneralScreenTest = () => (
   <TweakContainer>
    {Array(8).fill(<TweakItem />)}
   </TweakContainer> 
);

const DebloaterScreenTest = () => (
    <Table title='Debloater'> 
        <DebloaterTableRow header id='ID' name='Name' />
        {Array(100).fill(0).map((_, index) => <DebloaterTableRow id={index + ''} name='Brooklyn Simmons' onDelete={console.log} />)}
    </Table>
);

const SystemInfoScreenTest = () => (
    <SystemInfoCard title='Operating System' items={['Windows 10']} icon={osLogo} />
);

const ServicesScreenTest = () => (
    <Table title='Services'>
        <ServicesTableRow header />
        {Array(10).fill(0).map((_, idx) => (
            <ServicesTableRow id={idx + ''} name='Guy Hawkins' />
        ))}
        
    </Table>
)

const root = createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <HashRouter>

            <Routes>
                <Route path="/" element={<Navigate to="/general" />} />
                <Route element={<SideBarLayout />}>
                    <Route path="/general" element={<GeneralScreenTest />} />
                    <Route path="/latency" element={<div>Latency</div>} />
                    <Route path="/debloater" element={<DebloaterScreenTest />} />
                    <Route path="/services" element={<ServicesScreenTest />} />
                    <Route path="/systeminfo" element={<SystemInfoScreenTest />} />
                </Route>
            </Routes>

        </HashRouter>
    </React.Fragment>
)