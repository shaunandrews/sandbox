import React from "react";

// CSS
import "./VisualImage.scss";

function VisualImage({ visualImage, description }) {
    return (
        <img
            className="visual-image"
            src={`https://nwhtnjhsbfkpncfftcpn.supabase.co/storage/v1/object/public/update-visuals/${visualImage}`}
            alt={description}
        />
    );
}

export default VisualImage;