import * as React from "react";
import {Form} from "../abstract-components/form";
import {apiRequest} from "../utilities/api-request";

export class AddressUpdateForm extends React.Component {
    constructor(props) {
        super(props);
        this.formItems = [
            {
                label: 'Type',
                name: 'type',
                type: 'select',
                default: props.address.type,
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
                default: props.address.street
            },
            {
                label: 'City',
                name: 'city',
                type: 'text',
                default: props.address.city
            },
            {
                label: 'State',
                name: 'state',
                type: 'text',
                default: props.address.state
            },
            {
                label: 'Zip Code',
                name: 'zip',
                type: 'number',
                default: props.address.zip
            }
        ];
    }

    render() {
        return (
            <Form items={this.formItems} button='Update' submit={event => this.updateAddress(event)} />
        )
    }

    updateAddress(event) {
        event.preventDefault();
        let updatedAddress = {
            id: this.props.address.id
        };
        for (const [index, field] of Object.entries(this.formItems)) {
            updatedAddress[field.name] = event.target[index].value;
        }
        apiRequest('put', 'address', updatedAddress)
            .then(address => {
                this.props.submitted(address);
            }).catch(err => {
            console.error('Error updating address', err);
        })
    }
}
