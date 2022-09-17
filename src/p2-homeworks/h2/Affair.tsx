import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    return (
        <div className={s.tasks}>
            <div className={s.description}>[{props.affair.name}]</div>
            <div className={s.description}>&lt;{props.affair.priority}&gt;</div>
            <button onClick={deleteCallback}>&#10006;</button>
        </div>
    )
}

export default Affair


