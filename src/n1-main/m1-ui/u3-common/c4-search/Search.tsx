import React, {ChangeEvent} from 'react';
import Input from "../c3-input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../m2-bll/store";
import {actionFilter} from "./FilterReducer";

const Search = () => {

    const dispatch = useDispatch()
    const {search} = useSelector(({filter}:AppStateType)=> filter)

    const onSearch = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(actionFilter.setSearch(e.target.value.substr(0,20)))
    }


    return (
        <div>
            <Input inputType='text' value={search} onChange={onSearch} placeholder={'Search...'}/>
        </div>
    );
};

export default Search;