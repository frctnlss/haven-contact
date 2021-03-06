import * as React from "react";
import {PrimaryButton} from "../abstract-components/primary-button";
import {ContactAddForm} from "./contact-add-form";

export class ContactAddButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };
    };

    render() {
        return (
            <div>
                <PrimaryButton text={"Add Contact"} action={() => this.setState({showForm: !this.state.showForm})}/>
                {this.state.showForm && (
                    <ContactAddForm submitted={contact => this.formSubmitted(contact)} />
                )}
            </div>
        );
    };

    formSubmitted(contact) {
        this.props.addContact(contact);
        this.setState({showForm: false});
    }
}
