import * as React from 'react';
import {List} from "./components/list";

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { lastName: "last"}
            ]
        }
    }

    render() {
        return (
            <div>
                Base Class
                <List items={this.state.contacts}/>
            </div>
        );
    };
}
