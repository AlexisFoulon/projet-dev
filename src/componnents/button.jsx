import React from "react";
import './button.css'

function Button ({ onClick, texte}) {
    return(
        <button className="btn_custom" onClick={onClick}>
            {texte}
        </button>
    )
}

export default Button