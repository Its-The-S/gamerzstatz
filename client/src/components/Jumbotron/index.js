import React from "react";

// jumbotron element
function Jumbotron({ children }) {
    return (
        <div
            style={{
                height: 560,
                clear: "both",
                paddingTop: 120,
                textAlign: "center",
            }}
        >
            {children}
        </div>
    );
}

export default Jumbotron;
