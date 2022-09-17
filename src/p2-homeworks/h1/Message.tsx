import React from 'react'
import style from './Message.module.css'

type TypeMessageProps = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: TypeMessageProps) {
    return (
        <div className={style.message}>
            <img src={props.avatar} alt={'logo'} className={style.avatar}/>

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

export default Message
