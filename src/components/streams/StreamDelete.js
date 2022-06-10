import React, { useEffect } from 'react'
import Modal from '../Modal'
import history from '../../history'
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


function StreamDelete(props) {

    useEffect(() => {
        props.fetchStream(props.match.params.id);
    }, [])

    const renderActions = () => {
        return (
            <div className="p-3  mt-2 text-center space-x-4 md:block">
                <Link
                    to='/'
                    className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                    Cancel
                </Link>
                <button
                    onClick={() => {
                        props.deleteStream(props.stream.id)
                    }}
                    className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600">
                    Delete
                </button>
            </div>
        )
    }

    const renderContent = () => {
        if (!props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return `Are you sure you want to delete the stream with title: ${props.stream.title}`
    }

    return (
        <Modal
            title="Are you sure?"
            content={renderContent()}
            action={renderActions()}
            onDismiss={() => history.push('/')}
        />
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
