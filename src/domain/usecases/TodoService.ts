import Todo from "../entities/Todo"
import { TodoRepository } from "../repositories/TodoRepository"

export default class TodoServiceImpl {
    todoRepo: TodoRepository

    constructor(tdl: TodoRepository) {
        this.todoRepo = tdl
    }
    GetTodos(): Array<Todo[]> {
        return this.todoRepo.GetTodos()
    }
    SetTodos(todo: Array<Todo[]>): void {
        return this.todoRepo.SetTodos(todo)
    }
    CreateTodoList(todo: Todo): Array<Todo> {
        return this.todoRepo.CreateTodoList(todo)
    }
    DeleteTodoList(todo: Todo): Array<Todo> {
        return this.todoRepo.DeleteTodoList(todo)
    }
     }