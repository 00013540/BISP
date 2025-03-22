export const ensureTrailingSlash = (path: string): string =>
    path.endsWith('/') ? path : path + '/';
