import { v4 as uuidv4 } from 'uuid';

export const RepositoryTask = {}

const localStorageIdentifier = "tasksList"

RepositoryTask.createTask = ({ taskName, taskNotes, lastChange, category }) => {
    try {
        const newId = uuidv4()
        console.log(this.getTasks())
        let tasksList = this.getTasks()
        tasksList.push({
            id: newId,
            taskName: taskName,
            taskNotes: taskNotes,
            lastChange: lastChange,
            category: category
        })

        setTasks(tasksList);
    } catch (error) {
        console.log(error)
    }
}

RepositoryTask.getTasks = () => {
    if (localStorage.getItem(localStorageIdentifier) === null) {
        console.log("its null")
        setTasks([])
    }

    return JSON.parse(localStorage.getItem(localStorageIdentifier))
}

const setTasks = (tasksList) => {
    localStorage.setItem(localStorageIdentifier, JSON.stringify(tasksList))
}

RepositoryTask.updateTask = ({ id, taskName, taskNotes, lastChange, category }) => {
    let tasksList = this.getTasks()

    const newTasksList = tasksList.map((taskItem) => {

        if (taskItem.id === id) {
            return {
                ...taskItem,
                taskName: taskName,
                taskNotes: taskNotes,
                lastChange: lastChange,
                category: category
            }
        }
        return taskItem
    })

    setTasks(newTasksList)
}

RepositoryTask.deleteTask = (id) => {
    let tasksList = this.getTasks()

    const newTasksList = tasksList.filter((taskItem) => {

        if (taskItem.id !== id) {
            return true
        }

        return false
    })

    setTasks(newTasksList)
}

