import * as React from "react";
import {DangerButton} from "../abstract-components/danger-button";
import {apiRequest} from "../utilities/api-request";

export class AddressDeleteButton extends React.Component {

    render() {
        return (<DangerButton text={"Delete Address"} action={() => this.deleteContact()} />);
    };

    deleteAddress() {
        apiRequest('delete', `address/${this.props.addressId}`);
        this.props.deleted();
    }
}