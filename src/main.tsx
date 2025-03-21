import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { UserContextProvider } from '@/context/user-context';
import { queryClient } from '@/dataAccess/reactQuery';

import App from './App.tsx';
import './fonts/font.scss';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools initialIsOpen={false} />
                <UserContextProvider>
                    <App />
                </UserContextProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>
);
