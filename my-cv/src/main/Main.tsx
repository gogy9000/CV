import style from './Main.module.scss'
import photo from '../assets/images/photo0000.jpg'
import {Fade} from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'
import Tilt from 'react-parallax-tilt';
import React from "react";
import {LanguageType} from "../App";
import {mainData} from "../data/mainData";

type MainType = {
    language: LanguageType
}

export const Main: React.FC<MainType> = ({language}) => {
    const langData = mainData[language]
    return (
        <div id='main' className={style.mainBlock}>
            <Fade delay={100} triggerOnce style={{width: '100%'}}>
                <div className={` ${style.mainContainer}`}>
                    <div className={style.titleBlock}>
                        <span className={style.subTitle}>{langData.subTitle}</span>
                        <h1 className={style.title}>{langData.title}
                            <br/>
                            <ReactTypingEffect
                                text={langData.typingEffect}
                            />
                        </h1>
                        {/*<a href={langData.linkCv} className={style.downloadCV} target={"_blank"}*/}
                        {/*   rel="noopener noreferrer">{langData.downloadCv}</a>*/}
                    </div>
                    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                        <img className={style.photo} src={photo}/>
                    </Tilt>
                </div>

            </Fade>
        </div>

    )
}