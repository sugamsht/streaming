import React from 'react'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { createStream } from '../../actions'
import { useNavigate } from 'react-router-dom';

function StreamCreate(props) {

    const history = useNavigate();

    function renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="flex text-red-600">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    function renderInput({ input, label, meta }) {
        return (
            <div className='flex flex-col'>
                <label>{label}</label>
                <input className='border-4' {...input} autoComplete="off" // destructured input from formProps
                />
                {renderError(meta)}
            </div>
        )
    }

    function onSubmit(formValues) {
        props.createStream(formValues);
        history('/');
        // console.log(formValues);
    }

    // console.log(props);
    return (
        <form onSubmit={props.handleSubmit(onSubmit)} className=" max-w-2xl mx-[10vw] my-5" >
            <Field name="title" component={renderInput} type="text" label="Enter Title" />
            <Field name="description" component={renderInput} type="text" label="Enter Description" />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-2 rounded">Submit</button>
        </form>
    )
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);