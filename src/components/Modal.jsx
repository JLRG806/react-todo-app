import { useEffect, useState } from "react";
import { ServiceTask } from "../service/serviceTask";



export function Modal({ children, status, onCloseModal }) {

    let saveStatus = false
    const [taskName, setTaskName] = useState("")
    const [taskNotes, setTaskNotes] = useState("")
    const [category, setCategory] = useState("")

    const [modalData, setModalData] = useState({
        taskName: "",
        taskNotes: "",
        lastChange: "",
        category: ""
    })

    const defaultModalState = () => {
        setTaskName("")
        setTaskNotes("")
        setCategory("")
    }

    useEffect(() => {
        if (status) {
            ServiceTask.createTask(modalData)
            defaultModalState()
            onCloseModal()
        }
    }, [modalData])

    const onSave = () => {
        saveStatus = true
        setModalData({
            taskName: taskName,
            taskNotes: taskNotes,
            lastChange: new Date().toLocaleString(),
            category: category
        })
    }

    if (status) {
        return (
            <>
                <div className="modal-body">
                    <div className="hidden modal">

                        <div className="container-none shadow-sm h-10 bg-aqua flex items-center justify-center">
                            <div className="text-xl">
                                <h1>Create new Task</h1>
                            </div>
                        </div>
                        <label htmlFor="taskName" className="my-4">
                            <input name="taskName" id="taskName" onChange={(e) => setTaskName(e.target.value)} className="appearance-none block w-[250px] bg-gray-200 text-gray-700 border rounded-full py-2 px-4 mx-4 focus:outline-none focus:bg-white" type="text" placeholder="Task Name..." />
                        </label>

                        <label htmlFor="" className="mb-3">
                            <input name="category" id="category" onChange={(e) => setCategory(e.target.value)} className="appearance-none block w-[250px] bg-gray-200 text-gray-700 border rounded-full py-2 px-4 mx-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Category..." />
                        </label>

                        <label htmlFor="taskNotes">
                            <textarea name="taskNotes" id="taskNotes" onChange={(e) => setTaskNotes(e.target.value)} rows="5" className="appearance-none block w-[250px] bg-gray-200 text-gray-700 border rounded py-2 px-4 mx-4 leading-tight focus:outline-none focus:bg-white" placeholder="Notes..."></textarea>
                        </label>

                        <div className="my-4">
                            <button onClick={onSave} className="px-4 py-2 mx-4 font-semibold text-sm bg-aqua rounded-full shadow-sm">Save Task</button>
                            <button onClick={onCloseModal} className="px-4 py-2 mx-4 font-semibold text-sm bg-delete rounded-full shadow-sm" >Close</button>
                        </div>
                    </div>
                </div>

                <div className="overlay"></div>

                {children}
            </>
        )
    }
    return (
        <>
            <div className="hidden"></div>
            {children}
        </>
    )
}