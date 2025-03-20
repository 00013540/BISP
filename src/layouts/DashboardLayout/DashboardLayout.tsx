import { NavLink, Outlet } from 'react-router';
import { doSignOut } from '@/firebase/auth.ts';

const DashboardLayout = () => {
    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/items">Items</NavLink>
                <NavLink to="/auth/sign-in">Sign in</NavLink>
                <NavLink to="/auth/sign-up">Sign up</NavLink>
                <button onClick={doSignOut}>Log out</button>
            </div>
            <h1>This is Dashboard layout</h1>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
