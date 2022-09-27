import style from './Footer.module.scss'
import telegramIcon from '../assets/images/telegram.png'
import linkedinIcon from '../assets/images/linkedin.png'
import githubIcon from '../assets/images/github.png'
import {Fade} from "react-awesome-reveal";
import React from "react";
import {LanguageType} from "../App";
import {mainData} from "../data/mainData";

export const Footer: React.FC<{ language: LanguageType }> = ({language}) => {
    const langData = mainData[language]
    return (
        <div className={style.footerBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.footerContainer}>
                    <h3>{langData.footerName}</h3>
                    <div className={style.iconsContainer}>
                        <a href={'https://t.me/GoropashnyjIvan'} target={"_blank"}
                           rel="noopener noreferrer">
                            <img className={style.socialIconItem} src={telegramIcon} alt={'Telegram Icon'}/>
                        </a>

                        {/*<a href={''} target={"_blank"}*/}
                        {/*   rel="noopener noreferrer">*/}
                        {/*    <img className={style.socialIconItem} src={linkedinIcon} alt={'Linkedin Icon'}/>*/}
                        {/*</a>*/}

                        <a href={'https://github.com/gogy9000'} target={"_blank"}
                           rel="noopener noreferrer">
                            <img className={style.socialIconItem} src={githubIcon} alt={'Github Icon'}/>
                        </a>
                    </div>
                    <div>{`2022 ${langData.copyright}`}</div>
                </div>
            </Fade>
        </div>
    )
}