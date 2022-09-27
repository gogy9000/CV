import style from './Header.module.scss'
import {Nav} from "./nav/Nav";
import React from "react";
import {LanguageType} from '../App';
import {BurgerNav} from "./burgerNav/BurgerNav";

type HeaderType = {
    language: LanguageType
    setLanguage: (language: LanguageType) => void
}

export const Header: React.FC<HeaderType> = ({language, setLanguage}) => {
    return (
        <div className={style.header}>
            <div className={style.headerSection}>
                <div className={style.logo}>IvanGoro</div>
            </div>
            <div className={style.headerSection}>
                <div>
                    <div className={`${style.language} ${language === 'ru' ? style.active : ''}`}
                         onClick={() => setLanguage('ru')}>Rus
                    </div>
                    <div className={`${style.language} ${language === 'en' ? style.active : ''}`}
                         onClick={() => setLanguage('en')}>Eng
                    </div>
                </div>
                <Nav language={language}/>
                <BurgerNav language={language}/>
            </div>
        </div>
    )
}