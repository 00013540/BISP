import { Timestamp } from 'firebase/firestore';

export const hasDurationPassed = (
    releasedAt: Timestamp,
    duration: number
): boolean => {
    const releaseTime = releasedAt.toMillis(); // Convert Firestore Timestamp to milliseconds
    const expirationTime = releaseTime + duration * 24 * 60 * 60 * 1000; // Add duration days
    return Date.now() >= expirationTime; // Check if current time has passed the expiration time
};
