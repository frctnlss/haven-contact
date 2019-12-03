import * as React from "react";
import Table from "react-bootstrap/Table";

export const List = (props) => {
    return (
        <Table hover>
            {props.items.map((item, index) => {
                return (
                    <ListItem item={item} parentKey={index} key={index} />
                );
            })}
        </Table>
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
            <tbody>
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
