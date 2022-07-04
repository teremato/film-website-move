import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css"

export const Header = () => {

    return (
        <header className={classes.header}>
            <div className={classes.logo_container}>
                <div className={classes.logo}>
                    <NavLink to="/home">Move</NavLink>
                </div>
            </div>
            <nav className={classes.nav}>
                <div className={classes.nav_bar}>
                    <NavLink className={(navData) => navData.isActive ? classes.active : ""} to={"/films"}>Фильмы</NavLink>
                    <NavLink className={(navData) => navData.isActive ? classes.active : ""} to={"/serials"}>Сериалы</NavLink>
                    <NavLink className={(navData) => navData.isActive ? classes.active : ""} to={"/animation"}>Мультфильмы</NavLink>
                    <NavLink className={(navData) => navData.isActive ? classes.active : ""} to={"/collection"}>Подборки</NavLink>
                </div>
            </nav>
            <input className={classes.input} placeholder="Искать..."></input>
            <button className={classes.button}>Войти</button>
        </header>
    )
}