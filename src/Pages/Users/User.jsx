import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import {
    fetchTodos, updateTodo, deleteTodo, addTodo,
} from '../../Store/Todos/action';
import Todo from '../../Components/Todo';

// eslint-disable-next-line react/prop-types
const User = ({ match: { params: { id } } }) => {
    const dispatch = useDispatch();
    const loading = useSelector((store) => store.todos.loading);
    const loadingItem = useSelector((store) => store.todos.loadingItem);
    const todosData = useSelector((store) => store.todos.data);
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(fetchTodos(id));
    }, []);

    const update = (todoId, params) => {
        dispatch(updateTodo(todoId, params));
    };

    const deleteItem = (todoId) => dispatch(deleteTodo(todoId));

    const addItem = ({ title }) => {
        dispatch(addTodo({ userId: id, title }));
    };

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            User
            <form onSubmit={handleSubmit(addItem)}>
                <input name="title" ref={register} />
                <input type="submit" />
            </form>
            <ul>
                {todosData.map((todo) => (
                    <Todo
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        update={update}
                        deleteItem={deleteItem}
                        loadingItem={loadingItem}
                    />
                ))}
            </ul>
        </div>
    );
};

export default User;
