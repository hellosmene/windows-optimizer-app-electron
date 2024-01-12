import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import SideBarLayout from './components/SideBarLayout/SideBarLayout';
import ClickableCard from './components/ClickableCard/ClickableCard';
import ChevronIcon from './components/ChevronIcon/ChevronIcon';
import SideBar from './components/SideBar/SideBar';

const Test = () => (
    <div style={{ height: '100%' }}>
        <SideBar />
    </div>
)

const root = createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <HashRouter>

            <Routes>
                <Route path="/" element={<Navigate to="/general" />} />
                <Route element={<SideBarLayout />}>
                    <Route path="/general" element={<div>General</div>} />
                    <Route path="/latency" element={<div>Latency</div>} />
                    <Route path="/debloater" element={<div>Debloater</div>} />
                    <Route path="/services" element={<div>Services</div>} />
                    <Route path="/systeminfo" element={<div>System Info</div>} />
                </Route>
            </Routes>

        </HashRouter>
    </React.Fragment>
)