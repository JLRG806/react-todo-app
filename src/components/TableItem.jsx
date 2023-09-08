export function TableItem({ id, taskName, lastChange, category, taskHandler }) {

    const onEditEvent = (e) => {
        console.log(e.target.name)
    }

    const onDeleteEvent = (e) => {

        const id = e.target.name
        const action = e.target.id

        taskHandler(id, action)
    }
    
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">
                    {taskName}
                </td>
                <td className="px-6 py-4">
                    {lastChange}
                </td>
                <td className="px-6 py-4">
                    {category}
                </td>
                <td className="px-6 py-4 ">
                    <button name={id} id="edit" onClick={onEditEvent} className="bg-black font-medium text-blue-600 hover:underline">Edit</button>-
                    <button name={id} id="delete" onClick={onDeleteEvent} className="bg-black font-medium text-blue-600 hover:underline">Delete</button>
                </td>
            </tr>
        </>
    )
}