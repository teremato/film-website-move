import React from "react";
import { useState } from "react";

import classes from "./FilmPost.module.css"
import imdbLogo from "./imdb-logo.svg"

export const FilmPost = (props) => {
    

    const style = {
        backgroundImage: `url(${props.img})`
    }

    const raiting = {
        color: (props.raiting >= 7) ? "rgb(143, 255, 109)" : "rgb(253, 255, 109)"
    }

    return (
        <div>
            <div style={style} className={classes.post}>
            <div className={classes.container}>
                <div className={classes.name}>{props.name}</div>
                <div style={raiting} className={classes.like}>
                    <img className={classes.logo_imdb} src={imdbLogo} alt="" />
                    <div style={raiting}>{props.raiting}</div>
                </div>
            </div>
            </div>
        </div>

    )
}