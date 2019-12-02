import * as React from "react";

export const List = (props) => {
    return (
        <div>
            list component
            {props.items.map((item, index) => {
                return (
                    <ListItem item={item} key={index}/>
                );
            })}
        </div>
    );
};

const ListItem = (props) => {
    return (
        <div>
            Item component
            {props.item}
        </div>
    )
};
