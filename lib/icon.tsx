import React from 'react';

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
        <span>{props.name}</span>
    )
}

export default Icon;