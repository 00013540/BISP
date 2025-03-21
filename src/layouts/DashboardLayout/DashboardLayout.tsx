import { NavLink, Outlet } from 'react-router';
import { doSignOut } from '@/firebase/auth.ts';
import { useUser } from '@/context/user-context';

const DashboardLayout = () => {
    const { clearUser } = useUser();

    const handleLogout = () => {
        doSignOut();
        clearUser();
    };

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/items">Items</NavLink>
                <NavLink to="/auth/sign-in">Sign in</NavLink>
                <NavLink to="/auth/sign-up">Sign up</NavLink>
                <button onClick={handleLogout}>Log out</button>
            </div>
            <h1>This is Dashboard layout</h1>
            <Outlet />
        </div>
    );
};

export default DashboardLayout;
