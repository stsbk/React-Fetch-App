import React, { Fragment, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
    usersFetch, deleteUser, changeUserName, addUser,
} from '../../Store/Users/action';

// eslint-disable-next-line
const Users = () => {
    // const authToken = useSelector((store) => store.localStorage.authorizationToken);
    const usersData = useSelector((store) => store.users.data);
    const usersLoading = useSelector((store) => store.users.loading);
    const loadingItem = useSelector((store) => store.users.loadingItem);
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(usersFetch());
    }, []);

    const deleteItem = (id) => dispatch(deleteUser(id));

    const editUserName = (id, params) => dispatch(changeUserName(id, params));

    const addNewUser = (params) => dispatch(addUser(params));

    const onSubmit = (data) => {
        addNewUser(data);
    };

    // if (!authToken) {
    //     return 'Not authorized!';
    // }

    if (usersLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            Users
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    ref={register({
                        minLength: {
                            value: 4,
                            message: 'asd',
                        },
                        required: 'username required',
                    })}
                    name="username"
                    type="text"
                />
                <input ref={register({ pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w]*)*$/, required: 'website required' })} name="website" type="text" />
                <input ref={register({ minLength: 4 })} name="name" type="text" />
                <input type="submit" />
            </form>
            <br />
            <br />
            {usersData.map((user) => (
                <Fragment key={user.id}>
                    <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
                    <button type="button" onClick={() => editUserName(user.id, { ...user, username: 'Noname' })}>Change</button>
                    <button type="button" onClick={() => deleteItem(user.id)}>Delete</button>
                    { loadingItem === user.id && <span>Loading...</span> }
                    <br />
                </Fragment>
            ))}
        </div>
    );
};

export default Users;
