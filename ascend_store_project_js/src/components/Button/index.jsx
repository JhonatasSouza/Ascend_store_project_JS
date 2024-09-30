import React, { Children } from "react";

function Button({ Children, className, onclick }) {
    return (
        <button className={className} onClick={onclick} >{Children}</button>
    )
}

export default Button