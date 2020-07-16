import React, {ChangeEvent, KeyboardEvent} from 'react';
import '../../App.css';
import s from "./MyInput.module.css"

type PropsType = {
    value: string
    error: string | null
    onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

function MyInput(props: PropsType) {
    return (
        <div>
            <input className={props.error ? s.error : ""}
                   value={props.value}
                   onChange={props.onChangeHandler}
                   onKeyPress={props.onKeyPressHandler}
                //className={error ? s.error : ""} //Почему так не работает!?
            />
            {
                props.error &&
                //<div className={s.errorMessage}>{props.error}</div> //Почему так не работает?!
                <div className="error-message">{props.error}</div>
            }
        </div>);
}

export default MyInput;