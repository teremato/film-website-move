import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css"

export const Header = () => {

    const nav = [
        {name: "Фильмы", links: "/films"},
        {name: "Сериалы", links: "/serials"},
        {name: "Мультфильмы", links: "/animation"},
        {name: "Подоборки", links: "/collection"}
    ]

    return (
        <header className={classes.header}>
            <div className={classes.logo_container}>
                <div className={classes.logo}>
                    <NavLink to="/home">Move</NavLink>
                </div>
            </div>
            <nav className={classes.nav}>
                {
                    nav.map((item) => {
                        return (
                            <div className={classes.link}>
                                <NavLink className={classes.nav_link} to={item.links}>{item.name}</NavLink>
                            </div>
                        )
                    })
                }
            </nav>
            <input className={classes.input} placeholder="Искать..."></input>
            <button className={classes.button}>Войти</button>
        </header>
    )
}