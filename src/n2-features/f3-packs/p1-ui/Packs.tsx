import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import classes from "./Packs.module.css";
import searchImg from '../../../n0-assets/icons8-search-50.png';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {addCardsPack, deleteCardsPack, getPacksT, PacksActions} from "../p2-bll/PacksReducer";
import {Pack} from "./Pack";
import Button from "../../../n1-main/m1-ui/u3-common/c2-button/Button";
import Search from '../../../n1-main/m1-ui/u3-common/c4-search/Search';
import Input from "../../../n1-main/m1-ui/u3-common/c3-input/Input";
import Pagination from "react-js-pagination";

export const Packs = React.memo(() => {
    const {currentPage, pageCount, cardPackTotalCount} = useSelector(({packs}: AppStateType) => packs)
    const {_id} = useSelector(({login}: AppStateType) => login);
    const {cardPacks} = useSelector(({packs}: AppStateType) => packs)
    const [title, setTitle] = useState<string>('')
    const {search} = useSelector(({filter}: AppStateType) => filter)

    const dispatch = useDispatch()

    useEffect(
        () => {
            dispatch(getPacksT(_id, currentPage, pageCount))
        },
        [_id, currentPage, pageCount])

    const deletePack = useCallback(
        (packId) => dispatch(deleteCardsPack(packId)),
        []
    )
    const addNewPack = useCallback(
        (name) => dispatch(addCardsPack(name)),
        []
    )

    const onAddItemClick = () => {
        let newTitle = title.trim();
        setTitle('')
        addNewPack && addNewPack(newTitle)
    }

    const setTitleCallback = useCallback(
        (e: ChangeEvent<HTMLInputElement>): void => setTitle(e.currentTarget.value), [setTitle]);

    const changeCurrentPage = useCallback(
        (pageNumber: number) =>{dispatch(PacksActions.setCurrentPage(pageNumber))},
        [])


    return (
        <div className={classes.main}>
            <div className={classes.title}>Your packs</div>
            <div className={classes.header}>
                <Search/>
                <img src={searchImg} alt="search"/>
            </div>
            <div className={classes.header}>
                <Input inputType={'text'} onChange={setTitleCallback} placeholder={'Entry pack name...'} value={title}/>
                <Button buttonName={'Add new pack'} buttonType={'mini'} loading={false} onClick={onAddItemClick}
                        buttonDisabled={false}/>
            </div>
            <Pack deletePack={deletePack}
                  cardPacks={cardPacks}
            />
            <Pagination
                activeLinkClass={classes.activePage}
                innerClass={classes.pagination}
                itemClass={classes.pages}
                totalItemsCount={cardPackTotalCount}
                onChange={changeCurrentPage}
                activePage={currentPage}
                itemsCountPerPage={pageCount}/>
        </div>
    );
});
