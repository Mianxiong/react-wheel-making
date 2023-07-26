import React from "react";
import "./importIcons.js";

interface IconProps {
    name: string
}

// function Icon() {
//     return (
//         <span>icon</span>
//     )
// }
const Icon: React.FunctionComponent<IconProps> = (props) => {
    return (
        // <span>{props.name}</span>
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    )
}

export default Icon;