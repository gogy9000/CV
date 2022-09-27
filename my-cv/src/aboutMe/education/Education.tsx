import style from './Education.module.scss'

export const Education = () => {
    return (
        <div className={style.educationContainer}>
            <ul>
                <li>
                    <div className={style.title}>Front-End Development - IT Incubator</div>
                    <div className={style.subTitle}>Typescript / React / React Native / Redux / Redux Toolkit /
                        Redux-Thunk / Redux-Saga / Router-dom / React-navigation / Axios / Socket.io / FireBase /
                        webSocket / Formik /
                        Final-Form / Unit-tests / Snapshot-tests / Storybook / Postman / MUI / Ant design
                        <div>2021 - 2022</div>
                    </div>
                </li>
                <li>
                    <div className={style.title}>Mining engineer - Ural State Mining University</div>
                    <div className={style.subTitle}>
                        <div>2015-2020</div>
                    </div>
                </li>
            </ul>
        </div>
    )
}