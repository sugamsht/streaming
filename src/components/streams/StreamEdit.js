import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

const StreamEdit = (props) => {

    useEffect(() => {
        props.fetchStream(props.match.params.id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.id])

    function onSubmit(formValues) {
        props.editStream(props.match.params.id, formValues);
    }

    if (!props.stream) {
        return <div>Loading...</div>;
    }
    return (<div>
        <StreamForm initialValues={props.stream}
            onSubmit={onSubmit}
            title="Edit Stream" />
    </div>)
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
    mapStateToProps,
    { fetchStream, editStream }
)(StreamEdit);

