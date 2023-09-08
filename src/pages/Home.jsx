import { Task } from "./../Task.js"
import { Table } from "./../components/Table"
import { Modal } from "./../components/Modal.jsx"
import { useState } from "react"

export function Home() {
    const newTask = new Task()

    const [taskList, setTaskList] = useState(newTask.getTasks())

    const [modalStatus, setModalStatus] = useState(false)

    function createNewTaskEvent(e) {

        newTask.createNewTask({
            taskName: "Prueba Mi loco - " + Math.floor((Math.random() * 100)),
            lastChange: "Ayer Pa!!!",
            category: "Trabajo"
        })

        setTaskList(newTask.getTasks())
    }

    function taskHandler(id, action) {

        if (action === "edit") {
            newTask.editTask(id)
        }

        if (action === "delete") {
            newTask.deleteTaskById(id)
        }

        setTaskList(newTask.getTasks())
    }

    function onSearch(e) {
        const searchString = e.target.value
        setTaskList(newTask.searchTasksByTaskName(searchString))
    }

    function openModalEvent(e) {
        
    }

    const onCloseModal = () => {
        setModalStatus(status => status = !status)
    }

    return (
        <>
            <div className="container-none">


                <div className="container-none shadow-xl h-20 bg-aqua flex items-center justify-center">
                    <div className="text-3xl">
                        <h1>React TODO App</h1>
                    </div>
                </div>

                <div className="w-[800px] h-[600px] my-5 mx-auto shadow-2xl rounded-lg">
                    <div className="flex flex-row justify-center items-center py-10">
                        <Modal status={modalStatus} onCloseModal={onCloseModal}>
                            <button onClick={()=> setModalStatus(status => status = !status)} value={true} className="px-4 py-2 mx-4 font-semibold text-sm bg-aqua rounded-full shadow-sm">New Task</button>
                        </Modal>
                        <br></br>
                        <input onChange={onSearch} className="appearance-none block w-[250px] bg-gray-200 text-gray-700 border rounded-full py-2 px-4 mx-4 leading-tight focus:outline-none focus:bg-white" id="search" type="text" placeholder="Search..."></input>
                    </div>

                    <hr className="w-[750px] mx-auto my-2"></hr>

                    <Table todoList={taskList} taskHandler={taskHandler} />

                </div>
            </div>

        </>
    )
}