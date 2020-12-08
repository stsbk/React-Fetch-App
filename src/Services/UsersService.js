import API from '../API';

class UsersService {
    static async getAll() {
        try {
            const { data } = await API.get('users');

            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default UsersService;
