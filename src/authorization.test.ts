import { get_auth_url } from './authorization';

it('Should configure full url ', () => {
    const fullURL = get_auth_url('x', 'z', 'y');
    expect(fullURL).toBe(
        'https://platform.hootsuite.com/oauth2/auth?response_type=code&client_id=x&scope=offline&redirect_uri=z&state=y',
    );
});
