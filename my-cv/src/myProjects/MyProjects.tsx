import style from './MyProjects.module.scss'
import {MyProject} from "./myProject/MyProject";
import {Title} from "../common/components/title/Title";
import imageMyProject from './../assets/images/imageMyProject.jpg'
import {Fade} from "react-awesome-reveal";
import {myProjectsData} from "../data/myProjectsData";
import React from "react";
import {LanguageType} from "../App";

export const MyProjects: React.FC<{ language: LanguageType }> = ({language}) => {
    const social = {
        backgroundImage: `url(${imageMyProject})`
    };

    const langData = myProjectsData[language]
    return (
        <div id='projects' className={style.myProjectsBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.myProjectsContainer}>
                    <Title title={langData.title}
                           subTitle={langData.subTitle}
                           description={langData.description}/>
                    <div className={style.myProjects}>
                        <MyProject langDataButton={langData.nameButton} image={social} title={'Social Network'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik'}
                                   link={'https://github.com/DreamLife37/React_Project_Social_Network_TS'}/>
                        <MyProject langDataButton={langData.nameButton} image={social} title={'Todolist'}
                                   description={'Stack: TS, React, Redux, Redux-Thunk, React Router DOM, Axios, Formik, MUI, Storybook'}
                                   link={'https://github.com/DreamLife37/React_Project_Todolist_TS'}/>
                        <MyProject langDataButton={langData.nameButton} image={social} title={'Project Food'}
                                   description={'Stack: JavaScript, Fetch API'}
                                   link={'https://github.com/DreamLife37/JS_Project_Food'} />
                        <MyProject langDataButton={langData.nameButton} image={social} title={'Project Cards'}
                                   description={'Stack: TS, React, Redux Toolkit, Redux-Thunk, React Router DOM, Axios, Formik, MUI'}
                                   link={'https://github.com/DreamLife37/React_Project_Cards'}/>
                    </div>
                </div>
            </Fade>
        </div>
    )
}