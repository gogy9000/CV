import style from './AboutMe.module.scss'
import {Title} from "../common/components/title/Title";
import {Skills} from './skills/Skills';
import React, {useState} from "react";
import {Education} from "./education/Education";
import {Fade} from "react-awesome-reveal";
import {aboutMeData} from "../data/aboutMeData";
import {LanguageType} from "../App";
import {WorkExperience} from "./work/WorkExperience";

export const AboutMe: React.FC<{ language: LanguageType }> = ({language}) => {

    type Tabs = 'MAIN_SKILLS' | 'EDUCATION' | 'WORK_EXPERIENCE'

    const [currentTab, setCurrentTab] = useState<Tabs>('MAIN_SKILLS')
    const langData = aboutMeData[language]
    return (

        <div id='aboutMe' className={style.aboutMeBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.aboutMeContainer}>
                    <Title title={langData.title}
                           subTitle={langData.subTitle}
                           description={langData.description}/>
                    <div className={style.menuTab}>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('MAIN_SKILLS')}
                               className={currentTab === 'MAIN_SKILLS' ? style.navItemActive : style.navItem}>{langData.nameTabs[0]}</a>
                        </div>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('EDUCATION')}
                               className={currentTab === 'EDUCATION' ? style.navItemActive : style.navItem}>{langData.nameTabs[1]}</a>
                        </div>
                        <div className={style.navMenu}>
                            <a onClick={() => setCurrentTab('WORK_EXPERIENCE')}
                               className={currentTab === 'WORK_EXPERIENCE' ? style.navItemActive : style.navItem}>{langData.nameTabs[2]}</a>
                        </div>
                    </div>
                    <div className={style.contentTab}>
                        {(currentTab === 'MAIN_SKILLS') &&
                            <Skills/>
                        }
                        {(currentTab === 'EDUCATION') &&
                            <Education/>
                        }
                        {(currentTab === 'WORK_EXPERIENCE') &&
                            <WorkExperience language={language}/>
                        }
                    </div>

                </div>
            </Fade>
        </div>

    )
}