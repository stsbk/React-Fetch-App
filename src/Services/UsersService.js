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

    static async deleteUser(id) {
        try {
            const user = await API.delete(`users/${id}`);

            return user.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default UsersService;
