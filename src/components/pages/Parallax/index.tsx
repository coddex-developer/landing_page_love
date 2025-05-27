import "./parallax.min.css";
import React from "react";

interface ParallaxProps {
    children?: React.ReactNode;
    image?: string;
}

function Parallax({children, image = ""}: ParallaxProps) {
    return (
            <div className="heroSection" style={{backgroundImage: `url("${image}")`}}>
                <div className="darkGlass"></div>
                {children}
            </div>
    );
};

export default Parallax;