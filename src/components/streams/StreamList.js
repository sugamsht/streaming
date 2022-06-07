import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {

    useEffect(() => {
        props.fetchStreams();
    }
        , [])

    const renderAdmin = (stream) => {
        console.log("yo list ko id", stream.userId);
        if (stream.userId === props.currentUserId) {
            return (
                <div className="flex gap-2">
                    <button className="btn-primary ">Edit</button>
                    <button className="btn-secondary">Delete</button>
                </div>
            );
        }
    }

    const renderList = () => {
        return props.streams.map(stream => {
            return (
                <div className="border-b border-gray-400 p-2" key={stream.id}>
                    <div className="flex">
                        <div className="flex-1">
                            <h3 className="font-bold">{stream.title}</h3>
                            <p>{stream.description}</p>
                        </div>
                        <div>
                            {renderAdmin(stream)}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="flex flex-col max-w-2xl mx-[10vw] my-5">
            <h1 className='text-2xl'> Streams </h1>
            {renderList()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), // Object.values() returns an array of the values of the object
        currentUserId: state.auth.userId
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
