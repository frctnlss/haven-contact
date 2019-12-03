import * as React from "react";
import {apiRequest} from "../utilities/api-request";
import {Form} from "../abstract-components/form";

export class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.formItems = [
            {
                label: 'First Name',
                name: 'first_name',
                type: 'text',
                default: 'Your first name',
                required: true
            },
            {
                label: 'Last Name',
                name: 'last_name',
                type: 'text',
                default: 'Your last name',
                required: true
            },
            {
                label: 'Email Address',
                name: 'email',
                type: 'text',
                default: 'Your email address',
                required: true
            },
            {
                label: 'Phone Number',
                name: 'phone_number',
                type: 'number',
                default: '1231239876'
            },
            {
                label: 'Birthday',
                name: 'birthday',
                type: 'date',
            }
        ];
    };

    render() {
        return (<Form items={this.formItems} button='Save' submit={event => this.addNewContact(event)} />);
    };

    addNewContact(event) {
        event.preventDefault();
        let newContact = {};
        for (const [index, field] of Object.entries(this.formItems)) {
            newContact[field.name] = event.target[index].value;
        }
        apiRequest('post', 'contact', newContact)
            .then(contact => {
                this.props.submitted(contact);
            }).catch(err => {
            console.error('Error saving new contact', err);
        })
    }
}
