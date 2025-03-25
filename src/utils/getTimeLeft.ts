import { Timestamp } from 'firebase/firestore';

export const getTimeLeft = (releasedAt: Timestamp, duration: number) => {
    const releaseTime = releasedAt.toMillis(); // Convert to milliseconds
    const expirationTime = releaseTime + duration * 24 * 60 * 60 * 1000; // Add duration days
    const now = Date.now(); // Current time in ms

    const remainingMs = expirationTime - now;

    if (remainingMs <= 0) return '00:00:00'; // Stop when expired

    const hours = Math.floor(remainingMs / (1000 * 60 * 60)); // Total hours
    const minutes = Math.floor((remainingMs / (1000 * 60)) % 60);
    const seconds = Math.floor((remainingMs / 1000) % 60);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};
