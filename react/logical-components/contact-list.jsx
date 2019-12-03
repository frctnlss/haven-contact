import * as React from "react";
import {apiRequest} from "../utilities/api-request";
import {List} from "../abstract-components/list";
import {ContactAddButton} from "./contact-add-button";

export class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: []
        };
    };

    componentDidMount() {
        apiRequest('get', 'contact').then(contacts => {
            this.setState({contacts: contacts});
        }).catch(err => {
            console.error('Error retrieving contacts', err);
        });
    };

    render() {
        return (
            <div>
                <ContactAddButton addContact={contact => this.appendContact(contact)} />
                <List items={this.state.contacts}/>
            </div>
        );
    };

    appendContact(contact) {
        this.setState({
            contacts: this.state.contacts.concat([contact])
        });
    }
}
