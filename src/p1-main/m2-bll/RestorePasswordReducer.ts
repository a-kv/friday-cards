
type initialStateType = {
    buttonTitle: string
    loading: boolean
    inputType: Array<string>
    value?: string
    isAuth: boolean
    inputPlaceholder: Array<string>
}

const initialState: initialStateType = {
    buttonTitle: 'Send password',
    loading: false,
    inputType: ['text'],
    inputPlaceholder: ['  Entry your e-mail'],
    isAuth: false
}

export const RestorePasswordReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

