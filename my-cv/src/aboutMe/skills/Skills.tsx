import style from './Skills.module.scss'

import React from "react";


export const Skills = () => {
    return (
        <div className={style.skillsContainer}>
            <ul>
                <li>
                    <span className={style.title}>Javascript, Typescript, ES6+</span>
                </li>
                <li>
                    <span className={style.title}>JavaScript library and frameworks - React, React Native</span>
                </li>
                <li>
                    <span className={style.title}>
                        State management libraries - Redux-toolkit, Thunk, Saga</span>
                </li>
                <li>
                    <span className={style.title}>
                        Routing - React router dom, React navigation</span>
                </li>
                <li>
                    <span
                        className={style.title}>Forms - Formik, React final form</span>
                </li>
                <li>
                    <span
                        className={style.title}>Testing - Unit tests, Snapshot image test, Storybook, Postman </span>
                </li>
                <li>
                    <span
                        className={style.title}>API - Axios, Rest API, WebSocket, Socket.io, FireBase</span>
                </li>
                <li>
                    <span
                        className={style.title}>Version control - Git</span>
                </li>
                <li>
                    <span
                        className={style.title}>Material Ul, Ant design</span>
                </li>
                <li>
                    <span className={style.title}>CSS preprocessors - SASS</span>
                </li>

            </ul>
        </div>
    )
}