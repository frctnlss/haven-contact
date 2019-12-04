import * as React from "react";
import {DangerButton} from "../abstract-components/danger-button";
import {apiRequest} from "../utilities/api-request";

export class ContactDeleteButton extends React.Component {

    render() {
        return (<DangerButton text={"Delete Contact"} action={() => this.deleteContact()} />);
    };

    deleteContact() {
        apiRequest('delete', `contact/${this.props.contactId}`);
        this.props.deleted();
    }
}