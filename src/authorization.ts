import * as request from 'request-promise-native';

import { HOOTSUITE_PLATFORM_ENDPOINT } from './config';
import { queryParams } from './utils';

export const get_auth_url = (client_id: string, redirect_uri: string, state?: string): string => {
    return `${HOOTSUITE_PLATFORM_ENDPOINT}/oauth2/auth?${queryParams({
        response_type: 'code',
        client_id,
        scope: 'offline',
        redirect_uri,
        state,
    })}`;
};

export const get_auth_token = (
    code: string,
    redirect_uri: string,
    client_id: string,
    client_secret: string,
): Promise<request.FullResponse> => {
    return request(`${HOOTSUITE_PLATFORM_ENDPOINT}/oauth2/token`, {
        method: 'post',
        formData: { code, redirect_uri, grant_type: 'authorization_code' },
        json: true,
        headers: {
            Authorization: `Basic ${new Buffer(`${client_id}:${client_secret}`).toString('base64')}`,
        },
    });
};
