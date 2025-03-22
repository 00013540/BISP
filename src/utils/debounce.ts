export const debounce = (func: () => void, ms = 300) => {
    let timer: NodeJS.Timeout | null;

    return (...args: unknown[]) => {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            func.apply(this, args);
        }, ms);
    };
};
