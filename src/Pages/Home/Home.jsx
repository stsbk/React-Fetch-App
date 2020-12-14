import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Store/LocalStorage/actions';

const Home = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const authToken = useSelector((store) => store.localStorage.authorizationToken);
    const loading = useSelector((store) => store.localStorage.loading);

    const onSubmit = ({ email, password }) => {
        dispatch(login(email, password));
    };

    return (
        <div>
            {authToken && (
                <ul>
                    <li>
                        <NavLink to="/users">
                            Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/photos">
                            Photos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/posts">
                            Posts
                        </NavLink>
                    </li>
                </ul>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="email"
                    ref={register({
                        required: 'Email required',
                        pattern: {
                            value: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
                            message: 'Enter valid email',
                        },
                    })}
                />
                <br />
                <span>{errors?.email?.message}</span>
                <br />
                <input
                    type="text"
                    name="password"
                    ref={register({
                        required: 'Password required',
                        minLength: {
                            value: 3,
                            message: 'Min length 3',
                        },
                    })}
                />
                <br />
                <span>{errors?.password?.message}</span>
                <br />
                <input type="submit" value="Submit" disabled={loading} />
            </form>
        </div>
    );
};

export default Home;
