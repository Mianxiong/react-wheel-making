import React from "react";
import "./importIcons.js";
import "./icon.scss"

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

        <svg className="fui-icon">
            <use xlinkHref={`#${props.name}`}></use>
        </svg>

    )
}

export default Icon;