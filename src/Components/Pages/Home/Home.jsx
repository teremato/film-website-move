import React from "react";

import classes from "./Home.module.css"

import { Slider } from "./Slider/Slider";
import {title} from "../../../Data/dataSerials"

export const Home = () => {

    const data = title;
    
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