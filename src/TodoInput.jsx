import { use, useState } from "react"

export default function TodoInput({addTodo}){
    const [todo, settodo]= useState('')
    return(
        <>
        <div className="flex flex-col w-1/2 gap-3 mt-2">
            <div className="bg-white flex w-full border-black border-solid rounded-md">
                <div className="h-15 w-1/10">
                <img className="h-full w-full rounded-l-md" src="https://play-lh.googleusercontent.com/DZWiPGFq1d2w9CBb6ZvFxYebUhDl-VpJD93ipw_rdj_7zg-se_VssVZGZvFWm8aHkaN3=w480-h960-rw"  alt="" />
                </div>
                <div className="w-9/10">
                <input className="outline-none text-xlg h-full w-full p-[5px]" type="text" value={todo} placeholder="Enter task" onChange={(e)=>{
                    settodo(e.target.value)
                }} />
                </div>
            </div>
            <div>
                <button className="h-10 w-full active:bg-indigo-500 bg-indigo-600 text-white rounded-md"
                onClick={()=>{
                    settodo("")
                    return addTodo(Date.now(),todo,false)
                }}
                >Add new Task</button>
            </div>
        </div>
        </>
    )
}