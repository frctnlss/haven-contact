import * as React from "react";
import {apiRequest} from "../utilities/api-request";
import {List} from "../abstract-components/list";
import {AddressAddButton} from "./address-add-button";
import {AddressUpdateForm} from "./address-update-form";
import {AddressDeleteButton} from "./address-delete-button";
import {CloseButton} from "../abstract-components/close-button";

export class AddressList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: [],
            showForm: false,
            clickedAddress: {}
        };
    };

    componentDidMount() {
        apiRequest('get', `contact/${this.props.contactId}/addresses`).then(addresses => {
            this.setState({addresses: addresses});
        }).catch(err => {
            console.error('Error retrieving contacts', err);
        });
    };

    render() {
        return (
            <div>
                {this.state.showForm && (
                    <div>
                        <AddressUpdateForm address={this.state.clickedAddress} submitted={address => this.updateAddress(address)} />
                        <CloseButton text='Cancel Address Update' action={() => this.closeForm()}/>
                        <AddressDeleteButton addressId={this.state.clickedAddress.id} deleted={() => this.deleteAddress()} />
                    </div>
                    )}
                <AddressAddButton addAddress={address => this.appendAddress(address)} contactId={this.props.contactId} />
                <List labels={this.getLabels()} items={this.state.addresses} itemClicked={address => this.clickedItem(address)} />
            </div>
        );
    };

    appendAddress(address) {
        this.setState({
            addresses: this.state.addresses.concat([address])
        });
    };

    clickedItem(address) {
        this.setState({
            showForm: true,
            clickedAddress: address
        })
    };

    closeForm() {
        this.setState({showForm: false});
    };

    deleteAddress() {
        const addressToRemove = this.state.clickedAddress;
        this.setState({
            contacts: this.state.addresses.filter(address => address.id !== addressToRemove.id),
            clickedAddress: {},
            showForm: false
        });
    }

    updateAddress(newAddress) {
        this.setState({
            contacts: this.state.addresses.map(address => {
                return address.id !== newAddress.id ? address : newAddress
            }),
            clickedAddress: {},
            showForm: false
        });
    }

    getLabels() {
        if (this.state.addresses.length === 0) {
            return [];
        }
        return Object.keys(this.state.addresses[0]);
    }
}
