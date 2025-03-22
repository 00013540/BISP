import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { debounce } from '@/utils/debounce';

export const useScrollInfo = (): {
    scrollbarWidth: number;
    isScrollable: boolean;
} => {
    const [scrollbarWidth, setScrollbarWidth] = useState<number>(0);
    const [isScrollable, setIsScrollable] = useState<boolean>(false);
    const location = useLocation();
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const calculateScrollbarWidth = () => {
        const scrollDiv = document.createElement('div');
        scrollDiv.style.width = '100px';
        scrollDiv.style.height = '100px';
        scrollDiv.style.overflow = 'scroll';
        scrollDiv.style.position = 'absolute';
        scrollDiv.style.top = '-9999px';

        document.body.appendChild(scrollDiv);

        const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        setScrollbarWidth(width);

        document.body.removeChild(scrollDiv);
    };

    const checkScrollable = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            const scrollable =
                document.documentElement.scrollHeight >
                document.documentElement.clientHeight;
            setIsScrollable(scrollable);
        }, 1000);
    };

    const debouncedCheckScrollableOnResize = debounce(() => {
        const scrollable =
            document.documentElement.scrollHeight >
            document.documentElement.clientHeight;
        setIsScrollable(scrollable);
    }, 300);

    useEffect(() => {
        calculateScrollbarWidth();
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            const scrollable =
                document.documentElement.scrollHeight >
                document.documentElement.clientHeight;
            setIsScrollable(scrollable);
        }, 1000);
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        checkScrollable();
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [location.pathname]);

    useEffect(() => {
        window.addEventListener('resize', debouncedCheckScrollableOnResize);
        return () => {
            window.removeEventListener(
                'resize',
                debouncedCheckScrollableOnResize
            );
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { scrollbarWidth, isScrollable };
};
