import React from 'react'
import flv from 'flv.js';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

function StreamShow(props) {

    const videoRef = React.createRef();

    const buildPlayer = () => {
        const player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${props.match.params.id}`
        });

        if (props.stream || player) {
            return;
        }
        player.attachMediaElement(videoRef.current);
        player.load();
    }

    useEffect(() => {
        const { id } = props.match.params;
        props.fetchStream(id);
        buildPlayer();
    }
        , [buildPlayer()])



    return (
        (props.stream) ? (
            <div className="flex flex-col max-w-2xl mx-[10vw] my-5">
                <video ref={videoRef} style={{ width: '100%' }} controls />
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

