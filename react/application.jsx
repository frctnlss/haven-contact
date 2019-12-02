import * as React from 'react';
import {List} from "./components/list";
import {Button} from "./components/button";

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { lastName: "last"}
            ],
            showForm: false
        }
    }

    render() {
        return (
            <div>
                Base Class
                <Button text={"Add Contact"} action={() => this.setState({showForm: !this.state.showForm})}/>
                {this.state.showForm && (
                    <div>
                        form
                    </div>
                )}
                <List items={this.state.contacts}/>
            </div>
        );
    };
}
