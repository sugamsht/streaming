import React from 'react'
import { connect } from 'react-redux';

import { createStream } from '../../actions'
import StreamForm from './StreamForm';


function StreamCreate(props) {

    function onSubmit(formValues) {
        props.createStream(formValues);
    }

    return (
        <div className='flex flex-col'>
            <StreamForm onSubmit={onSubmit} title="Create a Stream" />
        </div>
    )
}

export default connect(null, { createStream })(StreamCreate);