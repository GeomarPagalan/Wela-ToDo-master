import Todo from '../entities/Todo';

export interface TodoRepository {
		GetTodos(): Array<Todo[]>
    	SetTodos(todo: Array<Todo[]>): void
    	CreateTodoList(todo: Todo): Array<Todo>
	    DeleteTodoList(todo: Todo): Array<Todo>
}