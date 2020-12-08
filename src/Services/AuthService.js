const authCredential = {
    email: 'test@mail.com',
    password: '1234',
};

const fakeAuthorization = (email, pass) => new Promise(((resolve, reject) => {
    setTimeout(() => {
        if (authCredential.email === email && authCredential.password === pass) {
            resolve({
                user: {
                    email,
                    password: pass,
                },
                authorizationToken: 'asdasdasczxczxwdsawe2232adsc-23123',
            });
        }

        reject(new Error('Not Found'));
    }, 2000);
}));

class AuthService {
    static async login(email, pass) {
        try {
            const response = await fakeAuthorization(email, pass);

            return response;
        } catch (e) {
            return e;
        }
    }
}

export default AuthService;
