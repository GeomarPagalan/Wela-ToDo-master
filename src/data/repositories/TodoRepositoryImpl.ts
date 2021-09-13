import Todo from '../../domain/entities/Todo'
import { TodoRepository } from 'domain/repositories/TodoRepository'

export default class TodoRepositoryImpl implements TodoRepository {
    GetTodos(): Array<Todo> {
        if (typeof window !== 'undefined') {
            return JSON.parse(localStorage.getItem("todos")) || []
        }else {
            return []
        }
    }
      SetTodos(todo: Array<Todo>): any {
        localStorage.setItem("todos", JSON.stringify(todo))
    }
    CreateTodoList(value): Array<Todo> {
        const listValue = this.GetTodos()
        const currentValue = listValue.concat(value)
        this.SetTodos(currentValue)
        return currentValue
    }
    DeleteTodoList(value): Array<Todo> {
        const listValue = this.GetTodos()
        for (let i = 0; i < listValue.length; i++){
            if(listValue[i].id === value.id){
                listValue.splice(i,1);
              break;
            }
          }
        const currentValue = listValue
        this.SetTodos(currentValue)
        return currentValue
    }
 }