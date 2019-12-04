import * as React from "react";
import {apiRequest} from "../utilities/api-request";
import {Form} from "../abstract-components/form";

export class AddressAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.formItems = [
            {
                label: 'Type',
                name: 'type',
                type: 'select',
                default: 'home',
                options: [
                    'home',
                    'office',
                    'other'
                ]
            },
            {
                label: 'Street',
                name: 'street',
                type: 'text',
                placeholder: 'Your street address'
            },
            {
                label: 'City',
                name: 'city',
                type: 'text',
                placeholder: 'Your city'
            },
            {
                label: 'State',
                name: 'state',
                type: 'text',
                placeholder: 'Your state'
            },
            {
                label: 'Zip Code',
                name: 'zip',
                type: 'number',
                placeholder: '12345'
            }
        ];
    };

    render() {
        return (<Form items={this.formItems} button='Save' submit={event => this.addNewAddress(event)} />);
    };

    addNewAddress(event) {
        event.preventDefault();
        let newAddress = {
            contact_id: this.props.contactId
        };
        for (const [index, field] of Object.entries(this.formItems)) {
            newAddress[field.name] = event.target[index].value;
        }
        apiRequest('post', 'address', newAddress)
            .then(address => {
                this.props.submitted(address);
            }).catch(err => {
            console.error('Error saving new address', err);
        })
    }
}
