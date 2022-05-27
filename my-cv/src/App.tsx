import React from 'react';
import styles from './App.module.css'
import atom from './atom-symbol.png'


export const App = () => {
    return (
        <div className={styles.App}>
            <Header/>
            <Greetings/>
            <SkillsWrap/>
            <ProjectWrap/>
            <Offer/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

const Header = () => {
    return (
        <div className={styles.Header}>
            <div className={styles.HeaderContent}>
                <span>general</span>
                <span>skills</span>
                <span>project</span>
                <span>contacts</span>
            </div>
        </div>
    )
}
const Greetings = () => {
    return (
        <div className={styles.Greetings}>
            <div className={styles.GreetingsContent}>
                <span className={styles.welcomeBlock}>hi my name Ivan!<br/> I`am front-end developer</span>
                <div className={styles.PhotoBlock}>
                    <img
                        src="https://sun9-west.userapi.com/sun9-50/s/v1/if1/DGLU1MQAnRSHrFMo8vJXVXDaLNHHLyW0j1_hP8d-74W3kxkaxAo2lAkifzF7qfesfWnCeaDi.jpg?size=840x600&quality=96&type=album"
                        alt="photo"/>
                </div>

            </div>
        </div>
    )
}
const SkillsWrap = () => {
    return (
        <div className={styles.SkillsWrap}>

            <div className={styles.SkillsWrapContent}>
                <div className={styles.SkillsWrapContentTitle}>My skills</div>
                <div className={styles.SkillsWrapContentBlock}>
                    <Skills
                        skillName={'JS'}
                        icon={atom}
                    >
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat
                        non proident,
                        sunt in culpa qui officia
                        deserunt mollit anim id est laborum
                    </Skills>
                    <Skills
                        skillName={'skill'}
                        icon={atom}
                    >
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur.
                    </Skills>
                    <Skills
                        skillName={'skill'}
                        icon={atom}
                    >
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Skills>


                </div>
            </div>
        </div>
    )
}
type SkillsPropsType = {
    skillName: string
    icon: string
    children?: any
}
const Skills: React.FC<SkillsPropsType> = (props) => {
    return (
        <div className={styles.Skills}>
            <img src={props.icon} alt="icon"/>
            <div>{props.skillName}</div>
            <div>{props.children}</div>
        </div>
    )
}
const ProjectWrap = () => {
    return (
        <div className={styles.ProjectWrap}>

            <div className={styles.ProjectWrapContent}>
                <div>Project</div>
                <div className={styles.ProjectWrapContentBlock}>
                    <Project projectName={'bla'} icon={atom}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Project>
                    <Project projectName={'bla'} icon={atom}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Project>
                    <Project projectName={'bla'} icon={atom}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Project>
                    <Project projectName={'bla'} icon={atom}>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
                    </Project>


                </div>
            </div>
        </div>
    )
}
type ProjectPropsType = {
    projectName: string
    icon: string
    children?: any
}
const Project: React.FC<ProjectPropsType> = (props) => {
    return (
        <div className={styles.Project}>
            <a href="https://gogy9000.github.io/incubator-to-do-list">
                <img src={props.icon} alt="icon"/>
            </a>
            <div>{props.projectName}</div>
            <div>{props.children}</div>
        </div>
    )
}
const Offer = () => {
    return (
        <div className={styles.OfferWrap}>
            <div className={styles.OfferContent}>
                <span className={styles.OfferItem}>looking into remote work options</span>
                <span className={styles.OfferItem}>offer</span>
            </div>
        </div>
    )
}
const Contacts = () => {
    return (
        <div className={styles.ContactsWrap}>
            <div className={styles.ContactsContent}>
                <span className={styles.ContactsItem}>Contacts</span>
                <form className={styles.ContactsForm}>
                    <input className={styles.ContactsFormItem} type="text" name="" id=""/>
                    <input className={styles.ContactsFormItem} type="text" name="" id=""/>
                    <textarea className={styles.ContactsFormItem}/>
                </form>
                <span className={styles.ContactsItem}>dispatch</span>
            </div>
        </div>
    )
}
const Footer = () => {
    return (
        <div className={styles.FooterWrap}>
            <div className={styles.FooterContent}>
                <div className={styles.FooterItem}>My Name</div>
                <div className={styles.StrangeThing}>
                    <div className={styles.StrangeThingItem}>.</div>
                    <div className={styles.StrangeThingItem}>.</div>
                    <div className={styles.StrangeThingItem}>.</div>
                    <div className={styles.StrangeThingItem}>.</div>
                    <div className={styles.StrangeThingItem}>.</div>
                    <div className={styles.StrangeThingItem}>.</div>
                    <div className={styles.StrangeThingItem}>.</div>

                </div>
                <div className={styles.FooterItem}>All rights reserved</div>
            </div>
        </div>
    )
}
