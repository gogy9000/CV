import style from './Nav.module.scss'
import {Link} from "react-scroll";
import {navData} from "../../data/navData";
import {LanguageType} from "../../App";
import React from "react";


export const Nav: React.FC<{ language: LanguageType }> = ({language}) => {
    const langData = navData[language]
    const heightHeader = 80
    return (
        <div className={style.navSection}>
            <Link activeClass={style.active} to="main" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>{langData.main}</Link>
            <Link activeClass={style.active} to="aboutMe" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>{langData.aboutMe}</Link>
            {/*<Link activeClass={style.active} to="projects" spy={true} smooth={true}*/}
            {/*      duration={500} offset={-heightHeader}>{langData.myProjects}</Link>*/}
            <Link activeClass={style.active} to="contacts" spy={true} smooth={true}
                  duration={500} offset={-heightHeader}>{langData.contacts}</Link>
        </div>
    )
}