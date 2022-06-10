import React from 'react'
import Modal from '../Modal'
import history from '../../history'


export default function StreamDelete() {

    const action = (
        <div className="p-3  mt-2 text-center space-x-4 md:block">
            <button className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancel
            </button>
            <button className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">Delete</button>
        </div>
    )

    return (
        <Modal
            title="Are you sure?"
            content="Do you really want to delete your Stream? This process cannot be undone"
            action={action}
            onDismiss={() => history.push('/')}
        />
    )
}
