import Todo from '../entities/Todo';

export interface TodoRepository {
		GetTodos(): Array<Todo>
    	SetTodos(todo: Array<Todo>): Array<Todo>
    	CreateTodoList(todo: Todo): Array<Todo>
	    DeleteTodoList(todo: Todo): Array<Todo>
}