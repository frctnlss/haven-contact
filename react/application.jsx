import * as React from 'react';
import {ContactList} from "./logical-components/contact-list";

export class Application extends React.Component {
    render() {
        return (
            <ContactList />
        );
    };
}
