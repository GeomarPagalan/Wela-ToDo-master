import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../../../domain/entities/Todo';
import TodoRepositoryImpl from '../../../data/repositories/TodoRepositoryImpl';
import TodoService from '../../../domain/usecases/TodoService';

import { RootState } from "../store"

interface TodoState {
  todos: Array<Todo>
}

const initialState: TodoState = {
  todos: [],
}

const todoService = () => {
    const TodoRepo = new TodoRepositoryImpl()
    return new TodoService(TodoRepo)
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        createTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todos.push(action.payload)
                const listData = todoService().GetTodos()
                listData.push(action.payload)
                todoService().SetTodos(listData)
            },
            prepare: (todo: Todo) => {
                console.log(todo)
                return { payload: todo }
            },
        },
         updateTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                const updatedState = state.todos.map((payload) => {
                    if (action.payload.id === payload.id) {
                        return new Todo(action.payload.id, action.payload.title, action.payload.complete)
                    }
                    return payload
                })
                state.todos = updatedState
            },
            prepare: (todo: Todo) => {
                console.log(todo)
                return { payload: todo }
            },
        },
        deleteTodo: {
            reducer: (state, action: PayloadAction<Todo>) => {
                state.todos = state.todos.filter(({ id }) => id !== action.payload.id)
                todoService().SetTodos(state.todos)
            },
            prepare: (todo: Todo) => {
                console.log(todo)
                return { payload: todo }
            },
        },
    },
})

export const { createTodo, deleteTodo, updateTodo} = todoSlice.actions;
export const todos = (state: RootState) => state.todos.todos
export default todoSlice.reducer;

