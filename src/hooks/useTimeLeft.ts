import { useState, useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import { getTimeLeft } from '@/utils';

interface CountdownTimerProps {
    releasedAt: Timestamp;
    duration: number; // Duration in days
}

export const useTimeLeft = ({ releasedAt, duration }: CountdownTimerProps) => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(releasedAt, duration));

    useEffect(() => {
        if (timeLeft === '00:00:00') return;

        const interval = setInterval(() => {
            const newTime = getTimeLeft(releasedAt, duration);
            setTimeLeft(newTime);
        }, 1000);

        return () => clearInterval(interval);
    }, [releasedAt, duration, timeLeft]);

    return timeLeft;
};
