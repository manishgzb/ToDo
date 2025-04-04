import { use, useState } from "react"
import Todo from "./Todo"
export default function ToDoList({ todosList, deleteTodo, updateTodo, checkTodo }) {
    const [filter, setfilter] = useState(
        {
            allTodo: true,
            doneTodo: false,
            pendingTodo: false
        }

    )
    function filterallTodo() {
        setfilter({
            allTodo: true,
            doneTodo: false,
            pendingTodo: false
        })
    }
    function filterdoneTodo() {
        setfilter({
            allTodo: false,
            doneTodo: true,
            pendingTodo: false
        })
    }
    function filterpendingTodo() {
        setfilter(
            {
                allTodo: false,
                doneTodo: false,
                pendingTodo: true
            }

        )
    }

    return (
        <div className="w-1/2 mt-5">
            <h1 className="text-center text-3xl text-white">ToDo List</h1>
            <div className="flex justify-between mt-5">
                <button onClick={filterallTodo} className="w-48 h-10 text-white bg-indigo-500 rounded-sm  hover:bg-indigo-700">All</button>
                <button onClick={filterdoneTodo} className="w-48 h-10 text-white bg-indigo-500 rounded-sm hover:bg-indigo-700">Done</button>
                <button onClick={filterpendingTodo} className="w-48 h-10 text-white bg-indigo-500 hover:bg-indigo-700 rounded-sm">ToDo</button>
            </div>
            <div className="max-h-80 overflow-scroll overflow-x-hidden">
                {
                    filter.allTodo ?
                        todosList.map((currtodo) => (
                            <Todo id={currtodo.id} key={currtodo.id} todo={currtodo} deleteTodo={deleteTodo} updateTodo={updateTodo} checkTodo={checkTodo}></Todo>
                        )) : filter.doneTodo ?
                            todosList.map((currtodo) => (
                                currtodo.completed ? <Todo id={currtodo.id} key={currtodo.id} todo={currtodo} deleteTodo={deleteTodo} updateTodo={updateTodo} checkTodo={checkTodo}></Todo> : null
                            )) : filter.pendingTodo ?
                                todosList.map((currtodo) => (
                                    !currtodo.completed ? <Todo id={currtodo.id} key={currtodo.id} todo={currtodo} deleteTodo={deleteTodo} updateTodo={updateTodo} checkTodo={checkTodo}></Todo> : null
                                )) : null
                }
            </div>

        </div>
    )
}