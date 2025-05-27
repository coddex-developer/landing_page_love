import React from "react";
import "./section.css"

interface SectionProps {
    children?: React.ReactNode;
    className?: string;
}

function Section({children, className = ""}: SectionProps) {
    return (
        <>
            <div className={`section ${className}`}>
                {children}
            </div>
        </>
    );
};

export default Section;