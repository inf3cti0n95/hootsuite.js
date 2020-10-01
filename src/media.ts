import * as request from 'request-promise-native';

import { HOOTSUITE_PLATFORM_ENDPOINT } from './config';

export const upload_media = (media: Buffer, mimeType: SupportedMimeType, access_token: string) => {
    return request(`${HOOTSUITE_PLATFORM_ENDPOINT}/oauth2/token`, {
        method: 'post',
        formData: { sizeBytes: media.byteLength, mimeType: mimeType, grant_type: 'authorization_code' },
        json: true,
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    }).then();
};
