import React from 'react'
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

function StreamShow(props) {

    useEffect(() => {
        props.fetchStream(props.match.params.id);
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , [])

    return (
        (props.stream) ? (
            <div className="flex flex-col max-w-2xl mx-[10vw] my-5">
                <h1 className='text-2xl'> {props.stream.title} </h1>
                <p> {props.stream.description} </p>
            </div>
        ) : (
            <div>Loading...</div>
        )
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps, { fetchStream })(StreamShow);

