import * as React from "react";

export const List = (props) => {
    return (
        <div>
            list component
            {props.items.map((item, index) => {
                return (
                    <ListItem item={item} parentKey={index} key={index}/>
                );
            })}
        </div>
    );
};

const ListItem = (props) => {
    const listElements = [];
    if (typeof props.item == 'object') {
        for(const [index, element] of Object.entries(props.item)) {
            listElements.push(
                <ListItem item={element} key={props.parentKey + '_' + index} />
            );
        }
        return listElements;
    }
    return (
        <div>
            Item component
            {props.item}
        </div>
    );
};
