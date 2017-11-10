import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import './CatForm.css';
import { addCat, fetchCats } from '../actions';
import api from '../api';

//{...input} Destucturing of object. Shows all properties of input
const renderField = ({ input, label, type, meta: {touched, error, warning, invalid } }) => (
    <div className={`form-group ${touched && invalid ? 'has-danger' : ''}`}>
        <label><b>{label}</b></label>
        <input {...input} className="form-control" type={type}/>
        {touched && (error && <div className="text-help">{error}</div>)}
    </div>
)

class CatForm extends Component {
    onSubmit = (props) => {
        console.log(props);
        api.addCat({
            name: props.name,
            img: props.imageUrl
        })
        .then(() => this.props.fetchCats());
        // this.props.addCat(props);
    }

    render(){
        const { handleSubmit } = this.props;

        return (
            <form className="CatForm" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <fieldset>
                    <legend>Add a Cat</legend>

                    <Field label="Name" name="name" type="text" component={renderField} />
                    <Field label="Url to Image" name="imageUrl" type="text" component={renderField} />
                    <div>
                        <button type="submit" className="btn btn-primary">Add Cat</button>
                    </div>
                </fieldset>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.name){
        errors.name = 'Enter Name';
    }

    if(!values.imageUrl){
        errors.imageUrl = 'Enter Image URL';
    }
    return errors;
}

export default connect(null, { addCat, fetchCats })(reduxForm({
    form: 'CatForm',
    validate
})(CatForm));