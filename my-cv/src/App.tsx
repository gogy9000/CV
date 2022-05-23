import React from 'react';
import styles from './App.module.css'


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
                <div className={styles.PhotoBlock}>photo</div>

            </div>
        </div>
    )
}
const SkillsWrap = () => {
    return (
        <div className={styles.SkillsWrap}>
                <div>My skills</div>
               <div className={styles.SkillsWrapContent}>
                <div><Skills/></div>
                <div><Skills/></div>
                <div><Skills/></div>
               </div>
        </div>
    )
}
const Skills = () => {
    return (
        <div className={styles.Skills}>
            <div>icon</div>
            <div>link</div>
            <div>description</div>
        </div>
    )
}
const ProjectWrap = () => {
    return (
        <div className={styles.ProjectWrap}>
            <div>Project</div>
            <div className={styles.ProjectWrapContent}>
                <div><Project/></div>
                <div><Project/></div>
            </div>
        </div>
    )
}
const Project = () => {
    return (
        <div className={styles.Project}>
            <div>icon</div>
            <div>link</div>
            <div>description</div>
        </div>
    )
}
const Offer = () => {
  return(
      <div className={styles.OfferWrap}>
          <div className={styles.OfferContent}>
              <span className={styles.OfferItem}>looking into remote work options</span>
              <span className={styles.OfferItem}>offer</span>
          </div>
      </div>
  )
}
const Contacts = () => {
  return(
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
  return(
      <div className={styles.FooterWrap}>
          <div className={styles.FooterContent}>
              <div className={styles.FooterItem} >My Name</div>
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
