import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className="py-4 bg-white">
            <p className={`${classes.footerParagarph} text-center mb-0`}>
                Copyright &#169; 2022 EduTech
            </p>
        </footer>
    );
};

export default Footer;
