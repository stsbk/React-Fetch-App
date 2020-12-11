import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usersFetch } from '../../Store/Users/action';

// eslint-disable-next-line
const Users = () => {
    const authToken = useSelector((store) => store.localStorage.authorizationToken);
    const usersData = useSelector((store) => store.users.data);
    const usersLoading = useSelector((store) => store.users.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersFetch());
    }, []);

    if (!authToken) {
        return 'Not authorized!';
    }

    if (usersLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            Users
            <br />
            <br />
            {usersData.map((user) => (
                <>
                    <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
                    <button type="button">Change</button>
                    <button type="button">Delete</button>
                    <br />
                </>
            ))}
        </div>
    );
};

export default Users;
