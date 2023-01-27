import React from "react";

function Card(props) {
    const {
        card: { id, title },
    } = props;

    const cardStyle = {
        
    };
    return (
        <div className="card">
            {title}
      </div>
    )
}

export default Card