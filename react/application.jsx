import * as React from 'react';
import {ContactList} from "./logical-components/contact-list";
import Container from "react-bootstrap/Container";

export class Application extends React.Component {


    render() {
        return (
            <Container>
                <ContactList />
            </Container>
        );
    };
}
