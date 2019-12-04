import * as React from "react";
import {Form} from "../abstract-components/form";
import {apiRequest} from "../utilities/api-request";

export class ContactUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.formItems = [
            {
                label: 'First Name',
                name: 'first_name',
                type: 'text',
                default: props.contact.first_name,
                required: true
            },
            {
                label: 'Last Name',
                name: 'last_name',
                type: 'text',
                default: props.contact.last_name,
                required: true
            },
            {
                label: 'Email Address',
                name: 'email',
                type: 'text',
                default: props.contact.email,
                required: true
            },
            {
                label: 'Phone Number',
                name: 'phone_number',
                type: 'number',
                default: props.contact.phone_number
            },
            {
                label: 'Birthday',
                name: 'birthday',
                type: 'date',
                default: props.contact.birthday
            }
        ];
    }

    render() {
        return (
            <Form items={this.formItems} button='Update' submit={event => this.updateContact(event)} />
        )
    }

    updateContact(event) {
        event.preventDefault();
        let updatedContact = {
            id: this.props.contact.id
        };
        for (const [index, field] of Object.entries(this.formItems)) {
            updatedContact[field.name] = event.target[index].value;
        }
        apiRequest('put', 'contact', updatedContact)
            .then(contact => {
                this.props.submitted(contact);
            }).catch(err => {
            console.error('Error updating contact', err);
        })
    }
}
