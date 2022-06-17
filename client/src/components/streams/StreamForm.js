import React from 'react';
import { Field, reduxForm } from 'redux-form';

const StreamForm = (props) => {

    function renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="flex text-red-600">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    const renderInput = ({ input, label, meta }) => {
        return (
            <div className="flex flex-col">
                <label>{label}</label>
                <input {...input} autoComplete="off" className='border-4' // destructured input from formProps
                />
                {renderError(meta)}
            </div>
        );
    };

    const onSubmit = formValues => {
        props.onSubmit(formValues);
    };

    return (
        <form
            onSubmit={props.handleSubmit(onSubmit)}
            className="max-w-2xl mx-[10vw] my-5"
        >
            <h1 className='flex text-2xl justify-center max-w-2xl mx-[10vw] my-5'>{props.title}</h1>
            <Field name="title" component={renderInput} label="Enter Title" />
            <Field
                name="description"
                component={renderInput}
                label="Enter Description"
            />
            <button className="btn-primary">Submit</button>
        </form>
    );
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
};

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);