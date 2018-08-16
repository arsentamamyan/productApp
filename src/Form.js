import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Form as SematicForm, Input, TextArea, Button} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class Form extends Component {

  constructor(props) {
    super(props);

    const data = {
      price: this.props.data.price,
      name: this.props.data.name,
      description: this.props.data.description
    };

    this.props.initialize(data);
  }


  renderInputField(field) {
    return (
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
    return (
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

  render() {
    return (
      <div className="Form">
        <SematicForm onSubmit={this.props.handleSubmit((event) => this.onSubmit(event))}>
          <SematicForm.Group widths='equal'>
            <Field component={this.renderInputField} name="name" label="Name" value={this.props.data.name}/>
            <Field component={this.renderInputField} name="price" label="Price" value={this.props.data.price}/>
          </SematicForm.Group>
          <Field name="description" label="Description" defaultValue={this.props.data.description}
                 component={this.renderTextAreaField}/>
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

  if (values.price && !/^[.0-9]*$/.test(values.price)) {
    errors.price = "Wrong price."
  }

  return errors;
}

export default withRouter(reduxForm({
  validate,
  form: 'Form'
})(Form));