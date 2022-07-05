import React from "react";
import { Slider } from "./Slider/Slider";

import classes from "./Home.module.css"


export const Home = ({data}) => {
    
    return (
        <section>
            <div className={classes.tag}>move - это лучшие фильмы и сериалы</div>
            {
                data.slice(0, 2).map((item) => {
                    return <Slider {...item}/>
                })
            }
        </section>
    )
}