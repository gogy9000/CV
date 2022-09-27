import style from './BurgerNav.module.scss'
import {Link} from "react-scroll";
import {navData} from "../../data/navData";
import {LanguageType} from "../../App";
import React, {useState} from "react";
import iconBurger from '../../assets/images/hamburgerMenu.svg'


export const BurgerNav: React.FC<{ language: LanguageType }> = ({language}) => {
    const [isOpen, setIsOpen] = useState(false)
    const onBurgerBtn = () => {
        setIsOpen(!isOpen)
    }
    const langData = navData[language]
    const heightHeader = 80
    return (
        <div className={style.burgerNav}>
            <div className={`${style.burgerNavItems} ${isOpen ? style.show : ''}`}>
                <Link activeClass={style.active} to="main" spy={true} smooth={true}
                      duration={500} offset={-heightHeader}>{langData.main}</Link>
                <Link activeClass={style.active} to="aboutMe" spy={true} smooth={true}
                      duration={500} offset={-heightHeader}>{langData.aboutMe}</Link>
                {/*<Link activeClass={style.active} to="projects" spy={true} smooth={true}*/}
                {/*      duration={500} offset={-heightHeader}>{langData.myProjects}</Link>*/}
                <Link activeClass={style.active} to="contacts" spy={true} smooth={true}
                      duration={500} offset={-heightHeader}>{langData.contacts}</Link>
            </div>
            <img className={style.burgerButton} onClick={onBurgerBtn} src={iconBurger}></img>
        </div>
    )
}