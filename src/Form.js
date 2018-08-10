import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form as SematicForm, Input, TextArea, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { updateProduct } from './actions/index';
import { withRouter } from 'react-router-dom';

class Form extends Component {

    renderInputField(field) {
        return(
            <SematicForm.Field
                id='form-input-control-name'
                control={Input}
                label={field.label}
                type="text"
                {...field.input}
            />
        )
    }

    renderTextAreaField(field) {
        return(
            <SematicForm.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label={field.label}
                placeholder='Description'
                {...field.input}
            />
        )
    }

    onSubmit(values) {
        this.props.updateProduct(values, this.props.data.id, () => {
            this.props.history.push('/');
        });
    }

    render(){
        return(
            <div className="Form">
                <SematicForm onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
                    <SematicForm.Group widths='equal'>
                        <Field name="name" label="Name" value={this.props.data.name} component={this.renderInputField}/>
                        <Field name="price" label="Price" value={this.props.data.price} component={this.renderInputField}/>
                    </SematicForm.Group>
                    <Field name="description" label="Description" defaultValue={this.props.data.description} component={this.renderTextAreaField}/>
                    <Button>Submit</Button>
                </SematicForm>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    if (!values.name || !values.price) {
        errors.name = "The name is empty."
    }

    if (!isNaN(parseFloat(values.price)) && isFinite(values.price) && values.price < 0) {
        errors.price = "Wrong price."
    }

    return errors;
}

function mapStateToProps(state) {
    return {
        success: state.data
    }
}

export default withRouter(reduxForm({
    validate,
    form: 'EditProduct'
})(
    connect(mapStateToProps, {updateProduct})(Form)
))