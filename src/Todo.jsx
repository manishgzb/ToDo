import { use, useEffect, useRef, useState } from "react"

export default function Todo({ todo, deleteTodo, id, updateTodo, checkTodo }) {
    const [inputtodo, setinputtodo] = useState(todo.todoinfo)
    const [togglecheck, settogglecheck] = useState(todo.completed)
    const [toggleedit, settoggledit] = useState(false)
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    }, [toggleedit])
    return (
        <div className="flex h-fit w-full flex-wrap justify-between border-2 border-slate-400 mt-[5px] mb-[5px]">
            <div className="h-12 w-8/10"><input ref={inputRef} className={`text-lg bg-white h-full w-full px-2 py-2 text-black outline-none ${togglecheck ? "line-through text-gray-500" : ""
                }`} type="text" value={inputtodo}
                disabled={toggleedit == false}
                onChange={(e) => {
                    setinputtodo(e.target.value)
                    updateTodo(id, e.target.value)
                }}
            /></div>
            <div className="flex items-center justify-between gap-2.5 bg-white w-2/10">
                <div><input className="flex h-[20px] w-[20px]" type="checkbox" checked={togglecheck} onChange={() => {
                    if(toggleedit===false)
                    settogglecheck((prev) =>
                        !prev
                    )
                    checkTodo(id)



                }} /></div>
                <div className={`flex h-[20px] w-[20px] ${toggleedit===false?"bg-[url('https://img.icons8.com/color/20/edit--v1.png')]":"bg-[url('https://img.icons8.com/external-soft-fill-juicy-fish/20/external-save-essentials-soft-fill-soft-fill-juicy-fish.png')]"} bg-no-repeat`} onClick={() => {
                    if(togglecheck===false)
                    settoggledit((prev) => {
                        return !prev
                    }
                    )

                }}></div>
                <div className="flex h-[20px] w-[20px] bg-[url('https://img.icons8.com/ios-filled/20/FA5252/waste.png')] bg-no-repeat"
                    onClick={() => {
                        deleteTodo(id)
                    }}
                ></div>
            </div>
        </div>
    )
}