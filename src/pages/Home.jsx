import { ServiceTask } from "../service/serviceTask"
import { Table } from "./../components/Table"
import { Modal } from "./../components/Modal.jsx"
import { useEffect, useState } from "react"

export function Home() {


    const [taskList, setTaskList] = useState("")
    //TODO: Refactor the initial state of task list using useEffect() hook, reason asynchronous.
    useEffect(() => {
        setTaskList(ServiceTask.getTasks())
    }, [])

    const [modalStatus, setModalStatus] = useState(false)

    function taskHandler(id, action) {

        if (action === "edit") {
            ServiceTask.editTask(id)
        }

        if (action === "delete") {
            ServiceTask.deleteTask(id)
        }

        setTaskList(ServiceTask.getTasks())
    }

    //TODO:Refactor search with useEffect(), reason asynchronous
    function onSearch(e) {
        const searchString = e.target.value
        setTaskList(ServiceTask.searchTaskByName(searchString))
    }

    const onCloseModal = () => {
        setModalStatus(status => status = !status)
        setTaskList(ServiceTask.getTasks())
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
                            <button onClick={() => setModalStatus(status => status = !status)} className="px-4 py-2 mx-4 font-semibold text-sm bg-aqua rounded-full shadow-sm">New Task</button>
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