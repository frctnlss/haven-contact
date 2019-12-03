import * as React from "react";
import {Button} from "../abstract-components/button";
import {ContactForm} from "./contact-form";

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
                <Button text={"Add Contact"} action={() => this.setState({showForm: !this.state.showForm})}/>
                {this.state.showForm && (
                    <ContactForm submitted={contact => this.formSubmitted(contact)} />
                )}
            </div>
        );
    };

    formSubmitted(contact) {
        this.props.addContact(contact);
        this.setState({showForm: false});
    }
}
