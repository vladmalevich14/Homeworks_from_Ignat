import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.normalInput // need to fix with (?:)

    return (
        <div className={s.inputWrap}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onEnter}
                onBlur={setNameCallback}/>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span className={s.counter}>{totalUsers}</span>
            <div className={s.error}>{error}</div>
        </div>
    )
}

export default Greeting
