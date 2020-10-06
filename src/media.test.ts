import { upload_media } from './media';
import { StatusCodeError } from 'request-promise-native/errors';

it('Should raise an error', async () => {
    const dummyBuffer = Buffer.from('sample');
    const dummyToken = 'invalid-token';
    const dummyMimeType = 'video/mp4';
    try {
        await upload_media(dummyBuffer, dummyMimeType, dummyToken);
    } catch (e) {
        expect(e).toBeInstanceOf(StatusCodeError);
    }
});
