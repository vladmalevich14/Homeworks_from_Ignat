import React from 'react'
import style from './AlternativeMessage.module.css'

type typeAlternativeMessage = {
    avatar: string
    name: string
    message: string
    time: string
}

export const AlternativeMessage = (props: typeAlternativeMessage) => {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt="logo" className={style.avatar}/>

            <div className={style.corner}></div>

            <div className={style.textWrap}>
                <div>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.text}>{props.message}</div>
                </div>

                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}
