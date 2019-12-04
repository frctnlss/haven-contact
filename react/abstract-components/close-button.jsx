import * as React from "react";
import Button from "react-bootstrap/Button";

export const CloseButton = (props) => {
    return (
        <Button variant='secondary' size='sm' onClick={props.action} style={{margin: '2em'}}>
            {props.text}
        </Button>
    )
};
