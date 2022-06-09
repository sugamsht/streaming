import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamEdit = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.id])

    if (!props.stream) {
        return <div>Loading...</div>;
    }
    return <div>{props.stream.title}</div>;
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream }
)(StreamEdit);

