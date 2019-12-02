import * as React from "react";

export const Form = (props) => {
    return (
        <form onSubmit={props.submit}>
            <div>{props.title}</div>
            {props.items.map((item, index) => {
                return (
                    <FormItems item={item} key={index} />
                );
            })}
            <input type='submit' value={props.button} />
        </form>
    );
};

const FormItems = (props) => {
    return (
        <label>{props.item.label}
            <input type={props.item.type} name={props.item.name} placeholder={props.item.default} onChange={props.item.change}/>
        </label>
    )
};
