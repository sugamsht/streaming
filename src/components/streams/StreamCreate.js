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
            <h1 className='flex text-2xl justify-center max-w-2xl mx-[10vw] my-5'>Create a Stream</h1>
            <StreamForm onSubmit={onSubmit} />
        </div>
    )
}

export default connect(null, { createStream })(StreamCreate);