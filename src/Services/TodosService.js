import API from '../API';

class TodosService {
    static async fetchTodosByUserId(id) {
        try {
            const todos = await API.get(`todos?userId=${id}`);

            return todos.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    static async completeTodo(id, params) {
        try {
            const todo = await API.put(`todos/${id}`, params);

            return todo.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    static async deleteTodo(id) {
        try {
            const todo = await API.delete(`todos/${id}`);

            return todo.data;
        } catch (e) {
            throw new Error(e);
        }
    }

    static async addTodo(params) {
        try {
            const todo = await API.post('todos', params);

            return todo.data;
        } catch (e) {
            throw new Error(e);
        }
    }
}

export default TodosService;
