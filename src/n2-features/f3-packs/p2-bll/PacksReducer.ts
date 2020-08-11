import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AppStateType} from "../../../n1-main/m2-bll/store";
import {packsAPI} from "../p3-dal/PacksAPI";
import Cookies from "js-cookie";
import {commonActionsType} from "../../../n1-main/m2-bll/actions";

export type PackType = {
    _id: string
    user_id: string
    name: string
    path: string
    grade: number
    shots: number
    rating: number
    type: string
    created: string
    updated: string
}

type initialStateType = {
    cardPacks: Array<PackType>
    currentPage: number,
    pageCount: number,
    cardPackTotalCount: number
}
const initialState: initialStateType = {
    cardPacks: [],
    currentPage: 0,
    pageCount: 10,
    cardPackTotalCount: 0
}

export const PacksActions = {
    setPacks: (packs: Array<PackType>) => ({
        type: "packs/SET_PACKS",
        packs,
    } as const),
    addPack: (newPack: PackType) => ({
        type: "packs/ADD_PACK",
        newPack,
    } as const),
    deletePack: (packId: string) => ({
        type: "packs/DELETE_PACK",
        packId,
    } as const),
    setCurrentPage: (currentPage: number) => ({
        type: "packs/SET_CURRENT_PAGE",
        currentPage,
    } as const),
    setPackTotalCount: (cardPackTotalCount: number) => ({
        type: "packs/SET_TOTAL_COUNT",
        cardPackTotalCount,
    } as const),

}


type ActionsType =  commonActionsType<typeof PacksActions>;

export const packsReducer = (state: initialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'packs/SET_PACKS': {
            return {
                ...state,
                cardPacks: action.packs,
            }
        }
        case 'packs/SET_TOTAL_COUNT': {
            return {
                ...state,
                cardPackTotalCount: action.cardPackTotalCount,
            }
        }
        case 'packs/SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case 'packs/ADD_PACK': {
            return {
                ...state,
                cardPacks: [...state.cardPacks, action.newPack]
            }
        }
        case 'packs/DELETE_PACK': {
            return {
                ...state,
                cardPacks: state.cardPacks.filter(c => c._id != action.packId)
            }
        }
        default:
            return state;

    }
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, any>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, any>

export const getPacksT = (userId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    let token = Cookies.get('token')
    packsAPI.getPacks(userId, token)
        .then(res => {
            Cookies.set('token', res.token)
            dispatch(PacksActions.setPacks(res.cardPacks))
            dispatch(PacksActions.setCurrentPage(res.page))
            dispatch(PacksActions.setPackTotalCount(res.cardPacksTotalCount))
        })

}
export const addCardsPack = (name: string): ThunkType => (dispatch: ThunkDispatchType) => {
    let token = Cookies.get('token')
    packsAPI.addPack(token, name)
        .then(res => {
            Cookies.set('token', res.token)
            dispatch(PacksActions.addPack(res.newCardsPack))
        })
}
export const deleteCardsPack = (packId: string): ThunkType => (dispatch: ThunkDispatchType) => {
    let token = Cookies.get('token')
    packsAPI.deletePack(token, packId)
        .then(res => {
            Cookies.set('token', res.token)
            dispatch(PacksActions.deletePack(packId))
        })

}

