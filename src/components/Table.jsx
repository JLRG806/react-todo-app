import React from "react";

import { TableItem } from "./TableItem";

export function Table({ todoList, taskHandler }) {

    function tableItemList() {
        if (todoList.length > 0) {
            console.log("Renderizando items...")
            return todoList.map((todoItem) => {
                return (
                    <React.Fragment key={todoItem.id}>
                        <TableItem {...todoItem} taskHandler={taskHandler}/>
                    </React.Fragment>
                )
            })
        }
    }

    return (
        <>
            <div className="h-[400px] overflow-auto shadow-md sm:rounded-lg bg-red-600 mx-10">
                <table className="table-fixed w-full text-sm text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-4">
                                Task
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Last Change
                            </th>
                            <th scope="col" className="px-6 py-4">
                                Category
                            </th>

                            <th scope="col" className="px-6 py-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableItemList()}
                    </tbody>
                </table>
            </div>
        </>
    );
}