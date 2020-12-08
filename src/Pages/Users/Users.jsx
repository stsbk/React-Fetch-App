import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersFetch } from '../../Store/Users/action';

const Users = () => {
    const authToken = useSelector((store) => store.localStorage.authorizationToken);
    const users = useSelector((store) => store.users.data);
    const dispatch = useDispatch();

    console.log(users);

    useEffect(() => {
        dispatch(usersFetch());
    }, []);

    if (!authToken) {
        return 'Not authorized!';
    }

    return (
        <div>
            Users
        </div>
    );
};

export default Users;
