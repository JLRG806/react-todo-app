import { RepositoryTask } from "../repository/repositoryTask"

export const ServiceTask = {}


ServiceTask.createTask = (taskProperties) => {
    const { taskName, taskNotes, lastChange, category } = taskProperties;
    const response = RepositoryTask.createTask({ taskName, taskNotes, lastChange, category })

    return response
}

ServiceTask.getTasks = () => {

    const response = RepositoryTask.getTasks()

    return response
}

ServiceTask.getTaskById = (id) => {

    const response = RepositoryTask.getTaskById()

    return response
}

ServiceTask.updateTask = ({ id, taskName, taskNotes, lastChange, category }) => {

    const response = RepositoryTask.updateTask({ id, taskName, taskNotes, lastChange, category })

    return response
}

ServiceTask.deleteTask = (id) => {

    const response = RepositoryTask.deleteTask(id)

    return response
}

ServiceTask.searchTaskByName = (taskName) => {

    const response = RepositoryTask.searchTaskByName(taskName)

    return response
}

