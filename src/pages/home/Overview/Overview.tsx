import { useGetUsers } from '@/dataAccess/hooks/users/useGetUsers.ts';

const Overview = () => {
    const { data } = useGetUsers();

    return (
        <div>
            <h1>This is home page updated</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default Overview;
