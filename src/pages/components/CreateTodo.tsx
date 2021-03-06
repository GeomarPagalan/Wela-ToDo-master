import React, { useState } from "react"
import { nanoid } from "@reduxjs/toolkit"
import { createTodo } from "app/redux/todo/todo.slice"
import { useAppDispatch } from "app/redux/hooks"
import Todo from "../../domain/entities/Todo"

const CreateTodo = () => {
    const dispatch = useAppDispatch()
    const [title, setTitle] = useState("")
    const [id, setId] = useState(nanoid())

    const onChange = (e) => {
        setTitle(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const complete = false
        const todo = new Todo(id, title, complete)
        dispatch(createTodo(todo))
        setTitle("")
        setId(nanoid())
    }
    return (
    
     <div className="ui piled center aligned segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="ui input">
                    
                    <input type="text" placeholder="Enter" value={title} onChange={onChange} />
                   
                </div>
            </form>
    </div>
    );
};

export default CreateTodo
