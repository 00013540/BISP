import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { UserContextProvider } from '@/context/user-context';

import App from './App.tsx';
import './fonts/font.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <UserContextProvider>
                <App />
            </UserContextProvider>
        </BrowserRouter>
    </StrictMode>
);
