import React from 'react'
import Modal from '../Modal'

export default function StreamDelete() {
    return (
        <Modal>
            <div className="header">Delete Stream</div>
            <div className="content">
                Are you sure you want to delete this stream?
            </div>
            <div className="actions">
                <button className="ui primary button">Delete</button>
                <button className="ui button">Cancel</button>
            </div>
        </Modal>
    )
}
