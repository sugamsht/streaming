import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

const StreamList = (props) => {

    useEffect(() => {
        props.fetchStreams();
    }
        , [])

    const renderList = () => {
        return props.streams.map(stream => {
            return <div className="flex flex-col border-2 p-2" key={stream.id}>
                <h3 className='font-bold'>{stream.title}</h3>
                <p>{stream.description}</p>
            </div>
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
        streams: Object.values(state.streams) // Object.values() returns an array of the values of the object
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);
