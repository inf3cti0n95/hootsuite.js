export const queryParams = (params: Record<string, string | number | boolean>): string => {
    return Object.keys(params)
        .filter((k) => params[k] !== undefined)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&');
};
