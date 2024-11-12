import React from 'react'
import { AffairType } from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair({affair, deleteAffairCallback}: AffairPropsType) {

    const deleteCallback = (_id: number) => {

        deleteAffairCallback(_id);
    }

    const nameClass = s.name + ' ' + s2[affair.priority]
    const buttonClass = s.closeButton + ' ' + s2[affair.priority]
    const affairClass = s.affair + ' ' + s2[affair.priority]

    return (
        <div
            id={'hw2-affair-' + affair._id}
            className={affairClass}
        >
            <div id={'hw2-name-' + affair._id} className={nameClass}>
                {/*создаёт студент*/}
                {affair.name}
                {/**/}
            </div>
            <div id={'hw2-priority-' + affair._id} hidden>
                {affair.priority}
            </div>

            <button
                id={'hw2-button-delete-' + affair._id}
                className={buttonClass}
                onClick={() => deleteCallback(affair._id)}
                // need to fix

            >
                {/*текст кнопки могут изменить студенты*/}
                X
                {/**/}
            </button>
        </div>
    )
}

export default Affair
