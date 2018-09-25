import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {NavLink} from 'react-router-dom';

let PostForm = ({onSubmit, submitting, formStatus}) => {
    return (
        <div className="row">
            <div className="col-sm-12 col-lg-12 col-sm-push-12 col-lg-push-12">
                <form onSubmit={ onSubmit } noValidate>
                    <Field name="title" component={renderField} type="text"
                           id="first-name" label="Title"/>
                    <Field name="body" component={renderField} type="textarea"
                           id="last-name" label="Body"/>
                    <button type="submit" className="btn btn-primary post-submit" disabled={submitting}>Submit</button>
                </form>
                {formStatus === 'success' &&
                <p className="alert alert-success">
                    Post successfully saved.
                    <NavLink to="/"> Return to posts list</NavLink>
                </p>}
                {formStatus === 'error' &&
                <p className="alert alert-danger">Saving post failed. Please fill in all the fields.</p>}
            </div>
        </div>
    )
};

// Render schema for each field
const renderField = ({
    input,
    label,
    type,
    id,
    meta: {touched, error}
}) => (
    // Render schema for checkbox
    (type === 'checkbox')
        ?
        <div className="checkbox">
            <label>
                <input {...input} type={type}/>
                {label}
            </label>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
        :
        // Render schema for inputs
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <input {...input} id={id} type={type} className="form-control"/>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
);

function validate(formProps) {
    const errors = {};

    if (!formProps.title) {
        errors.title = 'Please enter a title';
    }

    if (!formProps.body) {
        errors.body = 'Please enter a body';
    }

    return errors;
}

PostForm = reduxForm({
    form: 'post',
    validate,
    enableReinitialize: true
})(PostForm);

export default PostForm;