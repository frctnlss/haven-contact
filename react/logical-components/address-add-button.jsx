import * as React from "react";
import {PrimaryButton} from "../abstract-components/primary-button";
import {AddressAddForm} from "./address-add-form";

export class AddressAddButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
    };

    render() {
        return (
            <div>
                <PrimaryButton text={"Add Address"} action={() => this.setState({showForm: !this.state.showForm})}/>
                {this.state.showForm && (
                    <AddressAddForm submitted={address => this.formSubmitted(address)} contactId={this.props.contactId}/>
                )}
            </div>
        );
    };

    formSubmitted(address) {
        this.props.addAddress(address);
        this.setState({showForm: false});
    }
}