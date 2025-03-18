import { QueryClient } from '@tanstack/react-query';
import { FirebaseError } from 'firebase/app';

const MAX_RETRY_COUNT = 3;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: (failureCount: number, error: unknown): boolean => {
        if (error instanceof FirebaseError) {
          const retriableErrors = [
            'unavailable',
            'internal',
            'deadline-exceeded',
          ];
          return (
            retriableErrors.includes(error.code) &&
            failureCount < MAX_RETRY_COUNT
          );
        }

        return false; // Do not retry if it's not a Firebase error
      },
    },
  },
});
