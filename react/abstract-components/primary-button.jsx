import * as React from "react";
import Button from "react-bootstrap/Button";

export const PrimaryButton = (props) => {
    return (
        <Button variant='primary' size='sm' onClick={props.action} style={{margin: '2em'}}>
            {props.text}
        </Button>
    )
};
