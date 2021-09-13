import React, { useState, useEffect } from "react"
import Todo from "./Todo"
import { useAppSelector } from "app/redux/hooks"

const TodosList = () => {
    const todos = useAppSelector((state) => state.todos.todos)
    const [renderList, setRenderList] = useState(() => {return null})
    useEffect(() => {
        if (typeof window !== 'undefined') {
        setRenderList(() => {
        return todos.map((todo) => {
            
        return (
        <div className="item" key={todo.id}>
            <div className="content">
                 <div className="description">
                     <div className="ui three column grid">
                        <Todo todo={todo} />
                         </div>
                     </div>
                </div>
         </div>
                    );
                })
            })

        }
    }, [todos]);

    return <div className="ui relaxed divided list">{renderList}</div>
};

export default TodosList

