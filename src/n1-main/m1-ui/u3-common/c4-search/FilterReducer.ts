import {commonActionsType} from "../../../m2-bll/actions";

type InitialStateType = typeof InitialState

const InitialState = {
    search: ""
}

export const actionFilter = {
    setSearch:(val:string) =>({
        type:'SET_SEARCH',
        val
    }as const)
}

export type FilterActionTypes = commonActionsType<typeof actionFilter>

export const filterReducer = (state:InitialStateType=InitialState,action:FilterActionTypes):InitialStateType => {
    switch (action.type) {
        case "SET_SEARCH":
            return {
                ...state,
                search: action.val
            }
    }
    return state
}

