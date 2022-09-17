import React from 'react'
import {AffairType, FilterType} from "./HW2";
import s from "./AlternativeAffairs.module.css";

type AffairsPropsType = {
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function AlternativeAffairs(props: AffairsPropsType) {
    const affairsItems = props.data.map(affair => {
        return (
            <div className={s.tasks} key={affair._id}>
                <div className={s.description}>&middot;{affair.name}&middot;</div>
                <div className={s.description}>&ndash;{affair.priority}&ndash;</div>
                <button onClick={() => props.deleteAffairCallback(affair._id)} className={s.cross}>&#10008;</button>
            </div>
        )
    })
    return (
        <div>
            {affairsItems}
            <button onClick={() => props.setFilter('all')} className={s.buttons}>All</button>
            <button onClick={() => props.setFilter('high')} className={s.buttons}>High</button>
            <button onClick={() => props.setFilter('middle')} className={s.buttons}>Middle</button>
            <button onClick={() => props.setFilter('low')} className={s.buttons}>Low</button>

        </div>
    )
}

export default AlternativeAffairs
