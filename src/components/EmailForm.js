import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {sendContactMessage} from './../actions';


class EmailForm extends React.Component {

    renderError({error,touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    
    renderInput = (formProps) => {
        return (
            <div className="field">
                <label>{formProps.label}</label>
                <input {...formProps.input} 
                type="text"  
                placeholder={formProps.placeholder} />
                {this.renderError(formProps.meta)}
            </div>
        );
    }

    renderTextarea = (formProps) => {
        
        return (
           
            <div className="field">
            <label>{formProps.label}</label>
            <textarea {...formProps.input}  placeholder={formProps.placeholder} rows={formProps.rows} />
           
            </div>
            
        );
    }

    onSubmit = (formVals) => {
        this.props.sendContactMessage(formVals);

    }
    
    render() {
        
        
        return ( 

        <div>

            <div className="ui segment left aligned">
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field placeholder="First Name" autoComplete="off" label="First Name" name="from_firstname" component={this.renderInput} />

                <Field placeholder="Last Name" label="Last Name" name="from_lastname" component={this.renderInput} />

                <Field placeholder="user@domain.com" label="Email Address" name="from_email" component={this.renderInput} />
                
                <Field placeholder="Enter your Message" label="Message" rows="4" name="from_msg" component={this.renderTextarea} />
                
                <div className="ui container right aligned">
                    <button  className="ui button">Contact</button>
                      
                </div>
                </form>
                
                

            </div>

        </div>
        );  
    }
};

const validate = formValues => {
    const errors= {};
   
    if (!formValues.from_email) {
        errors.from_email = 'Email address is required.';
    }
    
  
    return errors;
};

const formWrapped = reduxForm({
    form: 'ContactForm',
    validate: validate
})(EmailForm);

export default connect(null,{sendContactMessage})(formWrapped);