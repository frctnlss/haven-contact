import * as React from "react";
import Button from "react-bootstrap/Button";

export const DangerButton = (props) => {
    return (
        <Button variant='danger' size='sm' onClick={props.action} style={{margin: '2em'}}>
            {props.text}
        </Button>
    )
};
