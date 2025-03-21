import { useUser } from '@/context/user-context';

const Overview = () => {
    const { loading, currentUser } = useUser();

    return (
        <div>
            <h1>This is home page updated</h1>
            <p>{JSON.stringify(loading)}</p>
            <pre>{JSON.stringify(currentUser, null, 2)}</pre>
        </div>
    );
};

export default Overview;
