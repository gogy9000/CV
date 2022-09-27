import style from './Title.module.scss'

type TitleType = {
    title: string
    subTitle: string
    description: string
}
export const Title = (props: TitleType) => {
    return (
        <div className={style.title}>
            <span className={style.subTitle}>{props.subTitle}</span>
            <h2><span>{props.title}</span></h2>
            <p>{props.description}</p>
        </div>
    )
}