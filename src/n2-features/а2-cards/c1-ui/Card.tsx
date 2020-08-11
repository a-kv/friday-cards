import React from 'react';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../../n1-main/m2-bll/store';
import del from "../../../n0-assets/icons8-delete-50.png";
import classes from './Card.module.css';
import update from "../../../n0-assets/icons8-update-left-rotation-50.png";


type Props = {
    deleteCard: (cardId: string) => void
}

export const Card = React.memo(({deleteCard}: Props) => {

    const {cards} = useSelector(({cards}: AppStateType) => cards)

    return (

        <div className={classes.cardTable}>
            <table>
                <tr>
                    <th>question</th>
                    <th>answer</th>
                    <th>Grade</th>
                    <th>Setting</th>
                </tr>
                {cards.map(c =>
                    <tr key={c._id}>
                        <td>{c.question}</td>
                        <td>{c.answer} </td>
                        <td>{c.grade} </td>
                        <td>
                            <img onClick={() => deleteCard(c._id)} src={del} alt="delete"/>
                            <img src={update} alt="delete"/>
                        </td>
                    </tr>)}
            </table>
        </div>
    )
});
