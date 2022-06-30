import React from "react";

import classes from "./Footer.module.css"

export const Footer = () => {


    return (
        <footer className={classes.footer}>
            <div className={classes.logo}>Move</div>
            <div className={classes.description}>
                Весь материал на сайте представлен исключительно
                для домашнего ознакомительного просмотра.
            </div>
        </footer>
    )
}