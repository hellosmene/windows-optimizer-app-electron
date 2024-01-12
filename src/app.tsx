import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';


import ClickableCard from './components/ClickableCard/ClickableCard';

const Test = () => (
    <div style={{ margin: '8px' }}>
        <ClickableCard>General</ClickableCard>
    </div>
)

const root = createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <HashRouter>

            <Routes>
                <Route element={<Test />}>
                    <Route path="/" element={<div>Hello World!</div>} />
                </Route>
            </Routes>

        </HashRouter>
    </React.Fragment>
)