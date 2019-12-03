import * as React from "react";

export const Button = (props) => {
    return (
        <div onClick={props.action}>
            {props.text}
        </div>
    )
};
