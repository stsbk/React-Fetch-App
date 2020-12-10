import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { usersFetch } from '../../Store/Users/action';

const Users = () => {
    // const authToken = useSelector((store) => store.localStorage.authorizationToken);
    const usersData = useSelector((store) => store.users.data);
    const usersLoading = useSelector((store) => store.users.loading);
    const dispatch = useDispatch();

    console.log(usersData);

    useEffect(() => {
        dispatch(usersFetch());
    }, []);

    // if (!authToken) {
    //     return 'Not authorized!';
    // }

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
                    <br />
                </>
            ))}
        </div>
    );
};

export default Users;
