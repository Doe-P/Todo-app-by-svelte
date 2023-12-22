import {writable} from "svelte/store";
import {v4 as uuidV4} from "uuid";

export interface Todo {
    id: string;
    description: string;
    isCompleted: boolean;
    createdAt: Date;
}

function createTodo() {
    const todoList: Todo[] = [
        {
            id: uuidV4(),
            description: "Do something nice for someone I care about",
            isCompleted: true,
            createdAt: new Date(),
        } as Todo,
        {
            id: uuidV4(),
            description: "Memorize the fifty states and their capitals",
            isCompleted: false,
            createdAt: new Date(),
        } as Todo,
        {
            id: uuidV4(),
            description: "Contribute code or a monetary donation to an open-source software project",
            isCompleted: false,
            createdAt: new Date(),
        } as Todo,
    ];
    const {subscribe, set, update} = writable<Todo[]>(todoList);
    return {
        subscribe,
        addTodos: (description: string) => update((todos) => [...todos, {
            id: uuidV4(),
            description: description,
            isCompleted: false,
            createdAt: new Date(),
        } as Todo]),
        updateTodo: (todoId: string, status: boolean) => update((todos) => {
            const index = todos.findIndex((todo) => todo.id === todoId);
            todos[index] = {...todos[index], isCompleted: status}
            return todos;
        }),
        removeTodo: (todoId: string) => update((todos) => todos.filter((todo) => todo.id !== todoId)),
        resetTodo: () =>set(todoList),
}
}

export const todos = createTodo();
