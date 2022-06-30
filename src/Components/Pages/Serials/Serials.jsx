import React from "react";
import { FilmPost } from "../../FilmPost/FilmPost";

import { title } from "./dataSerials";

import classes from "./Serials.module.css"

export const Serials = () => {
    

    const data = title;
    const topList = data.sort((a, b) => b.likes - a.likes)

    return (
        <section>
            <div className={classes.type_block}>
                <div className={classes.type}>Лучшие сериалы {`>`}</div>
                <div className={classes.container}>
                    {
                        data.slice(0, 4).map((item) => {
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