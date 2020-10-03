import { queryParams } from './utils';

it('Should do build a queryString', () => {
    const result = queryParams({ month: 'octuber', type: 'fest', year: 2020 });
    expect(result).toBe('month=octuber&type=fest&year=2020');
});

it('Should do build a queryString ignoring undefined values', () => {
    const result = queryParams({ month: 'octuber', type: undefined, year: 2020 });
    expect(result).toBe('month=octuber&year=2020');
});

it('Should do build a queryString enconding spaces', () => {
    const result = queryParams({ month: 'octuber', type: 'big event', year: 2020 });
    expect(result).toBe('month=octuber&type=big%20event&year=2020');
});
