import * as React from "react";
import {ContactUpdateForm} from "./contact-update-form";
import {AddressList} from "./address-list";
import {LargeModal} from "../abstract-components/large-modal";
import {ContactDeleteButton} from "./contact-delete-button";
import Container from "react-bootstrap/Container";

export const ContactModal = (props) => {
    return (
        <LargeModal show={props.showModal} closed={props.closed} title='Contact'>
            <Container fluid>
                <ContactUpdateForm contact={props.contact} submitted={contact => props.submitted(contact)} />
                <ContactDeleteButton deleted={() => props.deleted()} contactId={props.contact.id} />
                <AddressList contactId={props.contact.id} />
            </Container>
        </LargeModal>
    );
};
