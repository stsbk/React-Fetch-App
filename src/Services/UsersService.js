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

    static async changeUserName(id, params) {
        try {
            const userName = await API.put(`users/${id}`, params);

            return userName.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    static async addNewUser(params) {
        try {
            const user = await API.post('users', params);

            return user.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default UsersService;
