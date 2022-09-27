import style from './Сontacts.module.scss'
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {LanguageType} from "../App";
import React, {useState} from "react";
import {contactsData} from "../data/contactsData";
import {ContactsForm} from "./ContactsForm";
import {Loading} from "../common/components/loading/Loading";

export type sendingStatusType = 'idle' | 'loading' | 'success' | 'error'

export const Contacts: React.FC<{ language: LanguageType }> = ({language}) => {
    const langData = contactsData[language]

    let [sendingStatus, setSendingStatus] = useState<sendingStatusType>('idle')

    return (
        <div id='contacts' className={style.contactsBlock}>
            <Fade delay={500} triggerOnce duration={1000}>
                <div className={style.contactsContainer}>
                    <Title title={langData.title}
                           subTitle={langData.subTitle}
                           description={langData.description}/>
                    <p className={style.email}>
                        {langData.contactEmail}: <a className={style.linkEmail}
                                                    href="mailto:goropashnyj9000@gmail.com">goropashnyj9000@gmail.com</a>
                    </p>
                    {sendingStatus === 'loading' && <Loading/>}

                    {sendingStatus === 'success'
                        ? <div className={style.sentMessage}>{langData.messageAfter}</div>
                        : <ContactsForm setSendingStatus={setSendingStatus} langData={langData}/>}

                    {sendingStatus === 'error' && <div className={style.sentMessage}>{langData.messageError}</div>}


                </div>
            </Fade></div>
    )
}