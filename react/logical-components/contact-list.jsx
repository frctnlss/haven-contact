import * as React from "react";
import {apiRequest} from "../utilities/api-request";
import {List} from "../abstract-components/list";
import {ContactAddButton} from "./contact-add-button";
import {ContactModal} from "./contact-modal";

export class ContactList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            showModal: false,
            clickedContact: {}
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
                <List labels={this.getLabels()} items={this.state.contacts} itemClicked={contact => this.clickedContact(contact)} />
                <ContactModal showModal={this.state.showModal}
                              closed={() => this.closeModal()}
                              contact={this.state.clickedContact}
                              deleted={() => this.deleteContact()}
                              submitted={contact => this.updateContact(contact)} />
            </div>
        );
    };

    appendContact(contact) {
        this.setState({
            contacts: this.state.contacts.concat([contact])
        });
    }

    clickedContact(contact) {
        this.setState({
            showModal: true,
            clickedContact: contact
        });
    }

    closeModal() {
        this.setState({showModal: false});
    }

    deleteContact() {
        const contactToRemove = this.state.clickedContact;
        this.setState({
            contacts: this.state.contacts.filter(contact => contact.id !== contactToRemove.id),
            clickedContact: {},
            showModal: false
        });
    }

    getLabels() {
        if (this.state.contacts.length === 0) {
            return [];
        }
        return Object.keys(this.state.contacts[0]);
    }

    updateContact(newContact) {
        this.setState({
            contacts: this.state.contacts.map(contact => {
                return contact.id !== newContact.id ? contact : newContact
            }),
            clickedContact: {},
            showModal: false
        });
    }
}
