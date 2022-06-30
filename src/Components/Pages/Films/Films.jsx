import React from "react";
import {FilmPost} from "../../FilmPost/FilmPost"

import classes from "./Film.module.css"

import { filmTitile } from "../../../Data/dataFilm";

export const Films = () => {

    const data = filmTitile;
    const topList = data.sort((a, b) => b.likes - a.likes);

    return (
        <section>
            <div className={classes.type_block}>
                <div className={classes.type}>Лучшие Фильмы {`>`}</div>
                <div className={classes.container}>
                    {
                        topList.slice(0, 4).map((item) => {
                            return <FilmPost {...item}/>
                        })
                    }
                </div>
            </div>
            <div className={classes.type_block}>
                <div className={classes.type}>Комедийные {`>`} </div>
                <div className={classes.container}>
                    {
                        data.map((item) => {
                            if (item.genres == "Комедия"){return <FilmPost {...item}/>}
                        })
                    }
                </div>
            </div>
            <div className={classes.type_block}>
                <div className={classes.type}>Драммы {`>`} </div>
                <div className={classes.container}>
                    {
                        data.map((item) => {
                            if (item.genres == "Драмма"){return <FilmPost {...item}/>}
                        })
                    }
                </div>
            </div>
        </section>
    )
}