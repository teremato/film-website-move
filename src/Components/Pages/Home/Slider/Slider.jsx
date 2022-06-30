import React from "react";

import classes from "./Slider.module.css"

export const Slider = (props) => {

    const backgroundImage = {
        backgroundImage: `url(${props.screenshot})`
    }

    return (
        <div style={backgroundImage} className={classes.main}>
            <div className={classes.container}>
                <div className={classes.block}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.name}>❤ {props.likes}</div>
                </div>
                <div className={classes.description}>{props.description}</div>
            </div>
        </div>
    )
}