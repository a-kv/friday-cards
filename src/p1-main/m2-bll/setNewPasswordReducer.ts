
type initialStateType = {
    buttonTitle: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
    inputPlaceholder: Array<string>
}

const initialState: initialStateType = {
    buttonTitle: 'Set new password',
    loading: false,
    inputType: ['password'],
    inputPlaceholder: ['  Set new password'],
    isAuth: false
}

export const setNewPasswordReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

