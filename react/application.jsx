import * as React from 'react';
import {List} from "./components/list";
import {Button} from "./components/button";
import {Form} from "./components/form";
import {apiRequest} from "./utilities/api-request";

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            showForm: false
        };
        this.formItems = [
            {
                label: 'First Name',
                name: 'first_name',
                type: 'text',
                default: 'Your first name',
                required: true
            },
            {
                label: 'Last Name',
                name: 'last_name',
                type: 'text',
                default: 'Your last name',
                required: true
            },
            {
                label: 'Email Address',
                name: 'email',
                type: 'text',
                default: 'Your email address',
                required: true
            },
            {
                label: 'Phone Number',
                name: 'phone_number',
                type: 'number',
                default: '1231239876'
            },
            {
                label: 'Birthday',
                name: 'birthday',
                type: 'date',
            }
        ];
    };

    componentDidMount() {
        apiRequest('get', 'contact').then(contacts => {
            console.log(contacts);
            this.setState({contacts: contacts});
        }).catch(err => {
            console.error('Error retrieving contacts', err);
        });
    }

    render() {
        return (
            <div>
                <Button text={"Add Contact"} action={() => this.setState({showForm: !this.state.showForm})}/>
                {this.state.showForm && (
                    <Form items={this.formItems} button='Save' submit={event => this.addNewContact(event)} />
                )}
                <List items={this.state.contacts}/>
            </div>
        );
    };

    addNewContact(event) {
        event.preventDefault();
        let newContact = {};
        for (const [index, field] of Object.entries(this.formItems)) {
            newContact[field.name] = event.target[index].value;
        }
        apiRequest('post', 'contact', newContact)
            .then((contact) => {
                this.setState({
                    contacts: this.state.contacts.concat([contact]),
                    showForm: false
                });
            }).catch(err => {
                console.error('Error saving new contact', err);
            })
    }
}
