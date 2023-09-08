import { useState } from "react";

export function Modal({ children, status, onCloseModal }) {

    if (status) {

        return (
            <>
                <div className="modal-body">
                    <div className="hidden modal">
                        <label htmlFor="taskName" className="mb-4">
                            <input className="appearance-none block w-[250px] bg-gray-200 text-gray-700 border rounded-full py-2 px-4 mx-4 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Task Name..." name="taskName" id="taskName" />
                        </label>

                        <label htmlFor="">
                            <textarea className="appearance-none block w-[250px] bg-gray-200 text-gray-700 border rounded py-2 px-4 mx-4 leading-tight focus:outline-none focus:bg-white" name="" id="" rows="5"></textarea>

                        </label>

                        <div className="my-4">
                            <button className="px-4 py-2 mx-4 font-semibold text-sm bg-aqua rounded-full shadow-sm">Save Task</button>
                            <button className="px-4 py-2 mx-4 font-semibold text-sm bg-delete rounded-full shadow-sm" onClick={onCloseModal}>Close</button>
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