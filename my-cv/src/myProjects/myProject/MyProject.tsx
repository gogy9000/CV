import Tilt from "react-parallax-tilt";
import React from "react";
import style from './MyProject.module.scss'

type MyProjectType = {
    title: string
    description: string
    image: any
    link: string
    langDataButton: string
}
export const MyProject: React.FC<MyProjectType> = ({title, description, image, link, langDataButton}) => {
    return (

        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
            <div className={style.portfolio}>
                <div className={style.projectImgContainer} style={image}>
                    <a className={style.myProjectButton} href={link} target={"_blank"}
                       rel="noopener noreferrer">{langDataButton}</a>
                </div>
                <div className={style.content}>
                    <h3 className={style.projectTitle}>{title}</h3>
                    <p><span className={style.description}>{description}</span></p>
                </div>
            </div>
        </Tilt>

    )
}

