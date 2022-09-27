import style from './WorkExperience.module.scss'
import React from "react";
import {LanguageType} from "../../App";
import {aboutMeData} from "../../data/aboutMeData";
import githubIcon from '../../assets/images/github.png'

export const WorkExperience: React.FC<{ language: LanguageType }> = ({language}) => {
    const langData = aboutMeData[language]
    return (
        <div className={style.workExperienceContainer}>
            <ul><h4>{langData.workExperience.frontEnd.title}</h4>
                <li>
                    <span className={style.title}>{langData.workExperience.frontEnd.projectCards}</span>
                    <a href={'https://github.com/DreamLife37/React_Poject_Cards'} target={"_blank"}><img
                        src={githubIcon} alt={"githubIcon"}/></a>
                    <div className={style.subTitle}>Stack: TS, React, Redux Toolkit, Redux-Thunk, React Router DOM,
                        Axios, Formik, MUI
                        <div>07.2022 - 09.2022</div>
                    </div>
                </li>

                <li>
                    <span className={style.title}>{langData.workExperience.frontEnd.projectSocialNetwork}</span>
                    <a href={'https://github.com/gogy9000/Aggregator'} target={"_blank"}><img
                        src={githubIcon} alt={"githubIcon"}/></a>
                    <div className={style.subTitle}> Stack: TS, React, Redux, Redux-Saga, React Router DOM, Axios,
                        WebSocket, Formik
                        <div>02.2022 - 09.2022</div>
                    </div>
                </li>

                <li>
                    <span className={style.title}>{langData.workExperience.frontEnd.projectTodolist}</span>
                    <a href={'https://github.com/gogy9000/Mini-trello'} target={"_blank"}><img src={githubIcon}
                                                                                               alt={"githubIcon"}/></a>
                    <div className={style.subTitle}> Stack: TS, React, Redux toolkit, Redux-Thunk, React Router DOM,
                        Axios,
                        Axios rate limit Formik, MUI, Storybook
                        <div>03.2022 - 08.2022</div>
                    </div>
                </li>

                <li>
                    <span
                        className={style.title}>{langData.workExperience.frontEnd.projectTodoOnNative}</span>
                    <a href={'https://github.com/gogy9000/mini-trello-react-native'} target={"_blank"}><img
                        src={githubIcon} alt={"githubIcon"}/></a>
                    <div className={style.subTitle}> Stack: TS, React native, React navigation, Redux toolkit,
                        RTC Query
                        <div>03.2022 - 08.2022</div>
                    </div>
                </li>

                <li>
                    <a className={style.title} href={'https://github.com/gogy9000/simple-store-view'} target={"_blank"}
                       rel="noopener noreferrer">{langData.workExperience.frontEnd.projectHandBagShop}<img src={githubIcon}
                                                                                                           alt={"githubIcon"}/></a>
                    <div className={style.subTitle}> Stack: React, Redux toolkit, FireBase, MUI
                        <div>03.2022 - 08.2022</div>
                    </div>
                </li>
                <li>
                    <a className={style.title} href={'https://github.com/gogy9000/Chess'} target={"_blank"}
                       rel="noopener noreferrer">
                        {langData.workExperience.frontEnd.projectChess}<img src={githubIcon}
                                                                            alt={"githubIcon"}/></a>
                    <div className={style.subTitle}> {"React"}
                        <div>03.2022 - 08.2022</div>
                    </div>
                </li>
            </ul>
            <ul><h4>{langData.workExperience.miningEngineer.title}</h4>
                <li>
                    <div className={style.title}>{langData.workExperience.miningEngineer.placeWork}</div>
                    <div className={style.subTitle}>{langData.workExperience.miningEngineer.description}
                        <div>2018 - 2022</div>
                    </div>
                </li>

            </ul>
        </div>
    )
}