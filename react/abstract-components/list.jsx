import * as React from "react";
import Table from "react-bootstrap/Table";

export const List = (props) => {
    return (
        <Table hover>
            <HeaderRow labels={props.labels}/>
            {props.items.map((item, index) => {
                return (
                    <ListItem item={item} parentKey={index} key={index} itemClicked={event => props.itemClicked(item)}/>
                );
            })}
        </Table>
    );
};

const HeaderRow = (props) => {
    return (
        <thead>
            <tr>
                {props.labels.map((label, index) => {
                    return (
                        <HeaderItem label={label} key={index} />
                    );
                })}
            </tr>
        </thead>
    )
};

const HeaderItem = (props) => {
    return (
        <td>
            {props.label}
        </td>
    );
};

const ListItem = (props) => {
    const listElements = [];
    if (typeof props.item === 'object' && props.item !== null) {
        for(const [index, element] of Object.entries(props.item)) {
            listElements.push(
                <ListItem item={element} key={props.parentKey + '_' + index} />
            );
        }
        return (
            <tbody onClick={event => props.itemClicked(event)}>
                <tr>
                    {listElements}
                </tr>
            </tbody>
        );
    }
    return (
        <td>
            {props.item}
        </td>
    );
};
