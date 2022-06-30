import React from "react";
import { useState } from "react";

import classes from "./FilmPost.module.css"

export const FilmPost = (props) => {

    const [likeCount, setLikeCount] = useState(props.likes);
    const [isLike, setIsLike] = useState(true)

    const SetLike = () => {  
        if(isLike == true){
            setLikeCount(likeCount + 1)
            setIsLike(false)
        }
        else{
            setIsLike(true)
            setLikeCount(likeCount - 1)
        }
    }
    
    const likeStyle = {
        color: isLike ? "white": "red",
        cursor: "pointer"
    }

    const style = {
        backgroundImage: `url(${props.img})`
    }

    return (
        <div style={style} className={classes.post}>
            <div className={classes.container}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.like}><span style={likeStyle} onClick={SetLike}>❤</span> {likeCount}</div>
            </div>
        </div>
    )
}