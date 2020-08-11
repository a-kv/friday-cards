import React, {useState, useEffect} from 'react';
import './Modal.scss';
import Button from "../c2-button/Button";
import {useSelector, useDispatch} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";
import {NewCardType} from "../../../../n2-features/а2-cards/c2-bll/cardsReducer";


type Props = {}
export const Modal = React.memo(() => {

    const {cards} = useSelector(({cards}: AppStateType) => cards)
    const [isHidden, setIsHidden] = useState(true);
    const [card, setCard] = useState<NewCardType>({
        user_id: '',
        __v: 0,
        _id: 'fake',
        cardsPack_id: '',

        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,
        type: '',
        rating: 0,
        created: '',
        updated: '',
    });


    return (

        <div className='wrapModal'>
            <div className='modalBackground'></div>
            <div>To check the answer, move the cursor over the card</div>
            <div className='card' onBlur={()=>{}}>
                <div className='question'>{card.question}</div>
                <div className='answer'>
                    <span>{card.answer}</span>
                    <div className='ratingBtn'>
                        <button>knew</button>
                        <button>didn't know</button>
                    </div>
                </div>
            </div>
            <Button
                onClick={() => {
                }}
                buttonType='mini'
                buttonName='NEXT'
                buttonDisabled={false}
                loading={false}/>
            <Button
                onClick={() => {}}
                buttonType='mini'
                buttonName='CLOSE'
                buttonDisabled={false}
                loading={false}/>
        </div>
    );
});

