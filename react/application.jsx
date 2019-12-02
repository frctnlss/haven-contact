import * as React from 'react';
import {List} from "./components/list";
import {Button} from "./components/button";
import {Form} from "./components/form";

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [
                { lastName: "last"}
            ],
            showForm: false
        };
        this.formItems = [
            {
                label: 'Name',
                name: 'name',
                type: 'text',
                default: 'temp name'
            },
        ];
    };

    render() {
        return (
            <div>
                Base Class
                <Button text={"Add Contact"} action={() => this.setState({showForm: !this.state.showForm})}/>
                {this.state.showForm && (
                    <Form items={this.formItems} button='Save' submit={(event) => {event.preventDefault(); this.setState({showForm: false});}} />
                )}
                <List items={this.state.contacts}/>
            </div>
        );
    };
}
