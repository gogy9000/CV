import React from "react";
import {useFormik} from "formik";
import style from './Сontacts.module.scss'
import {LangContactsDataType} from "../data/contactsData";
import {sendingStatusType} from "./Сontacts";
import {API} from "../common/api/api";


type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

type ContactsFormType = {
    langData: LangContactsDataType,
    setSendingStatus: (sendingStatus: sendingStatusType) => void
}

export const ContactsForm: React.FC<ContactsFormType> = ({
                                                             langData,
                                                             setSendingStatus
                                                         }) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.name) {
                errors.name = langData.errorRequired;
            }
            if (!values.email) {
                errors.email = langData.errorRequired;
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = langData.errorEmail;
            }
            if (!values.message) {
                errors.message = langData.errorRequired;
            }
            return errors;
        },
        onSubmit: async values => {
            if (navigator.onLine) {
                setSendingStatus('loading')
                API.sendMessage(values)
                    .then((res) => {
                        if (res.statusText === 'OK') {
                            formik.resetForm()
                            setSendingStatus('success')
                        } else setSendingStatus('error')
                    })
                    .catch((err) => {
                        setSendingStatus('error')
                    })
            } else {
                setSendingStatus('error')
            }
        },
    })

    const disabledButton = (!formik.values.email || !formik.values.name || !formik.values.message || !!formik.errors.email)

    return <div>
        <form onSubmit={formik.handleSubmit} className={style.form}>
            <input {...formik.getFieldProps('name')} className={style.input} placeholder={langData.placeholderName}
            />
            {formik.touched.name && formik.errors.name
                ? <div style={{color: '#9d1717', fontSize: '14px'}}>{formik.errors.name}</div>
                : null}
            <input
                {...formik.getFieldProps('email')} className={style.input} placeholder={langData.placeholderEmail}
            />
            {formik.touched.email && formik.errors.email
                ? <div style={{color: '#9d1717', fontSize: '14px'}}>{formik.errors.email}</div>
                : null}

            <textarea {...formik.getFieldProps('message')} placeholder={langData.placeholderMessage} name="message"
                      className={style.textarea}/>
            {formik.touched.message && formik.errors.message
                ? <div style={{color: '#ffffff', fontSize: '12px'}}>{formik.errors.message}</div>
                : null}

            <button type={'submit'} className={style.button}
                    disabled={disabledButton}>
                {langData.buttonSend}
            </button>
        </form>

    </div>
}