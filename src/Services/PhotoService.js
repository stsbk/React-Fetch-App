import API from '../API';

class PhotoService {
    static async getPhotos() {
        try {
            const photos = await API.get('/albums/1/photos');

            return photos.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default PhotoService;
