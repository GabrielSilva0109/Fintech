import React from "react";

const Style: React.CSSProperties ={
    border: "var(--gap-s) solid white",
    borderRightColor: "var(--color-4)",
    width: "var(--gap)",
    height: "var(--gap)",
    borderRadius: "50%",
    animation: "spin 1s infinite",
    margin: "5px"
}

const Loading = () => {
    return (
        <div style={Style}>
            
        </div>
    )
}


export default Loading