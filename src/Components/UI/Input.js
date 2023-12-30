import React from "react";

const Input = (props) => {
      return (
            <>
            <label htmlFor={props.id}>{props.label}</label>
            <input
            className={props.className}
            type={props.type}
            onChange={props.onChange}
            value={props.value}
            />
            </>
      );
};

export default Input;