import React from 'react';

// eslint-disable-next-line
const Todo = ({ id, title, completed, update, loadingItem, deleteItem }) => {
    const style = {
        fontSize: 18,
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : 'none',
    };

    return (
        // eslint-disable-next-line
        <li>
            <span style={style}>{title}</span>
            <button
                type="button"
                onClick={() => update(id, {
                    title,
                    completed: !completed,
                })}
            >
                {completed ? 'Uncompleted' : 'Complete'}
            </button>
            <button
                type="button"
                onClick={() => deleteItem(id)}
            >
                Delete
            </button>
            {loadingItem === id && <span>Loading....</span>}
        </li>
    );
};

export default Todo;
