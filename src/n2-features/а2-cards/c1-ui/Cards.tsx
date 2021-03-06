import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {getCardsThunk, addCardT, deleteCardT} from "../c2-bll/cardsReducer";
import {Card} from "./Card";
import classes from './Cards.module.css';
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import Search from "../../../n1-main/m1-ui/u3-common/c4-search/Search";


export const Cards = React.memo(() => {
    const [question, setQuestion] = useState<string>('')
    const [answer, setAnswer] = useState<string>('')

    const onChangeQuestion = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value)
    }, [])
    const onChangeAnswer = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setAnswer(e.currentTarget.value)
    }, [])

    let {id} = useParams()
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getCardsThunk(id))
        },
        [dispatch, id])

    const addCard = () => {
        dispatch(addCardT(id, question, answer))
        setQuestion('')
        setAnswer('')
    }
    const deleteCard = useCallback(
        (cardId) => dispatch(deleteCardT(cardId)),
        []
    )

    return (

        <div className={classes.main}>
            <div className={classes.title}>CARDS</div>
            <Search/>
            <div className={classes.header}>
                <Input inputType={'text'} onChange={onChangeQuestion} placeholder={'Entry question...'} value={question}/>
                <Input inputType={'text'} onChange={onChangeAnswer} placeholder={'Entry answer...'} value={answer} />
                <Button buttonName={'Add new card'} buttonType={'mini'} loading={false} onClick={addCard}
                        buttonDisabled={false}/>
            </div>
            <Card deleteCard={deleteCard}/>
        </div>
    )
})
