
type initialStateType = {
    buttonTitle: string
    loading: boolean
    inputType: Array<string>
    inputPlaceholder: Array<string>
    value?: string
    isAuth: boolean
}

const initialState: initialStateType = {
    buttonTitle: 'Sing up',
    loading: false,
    inputType: ['text', 'password'],
    inputPlaceholder: ['  Name', '  E-mail', '  Password'],
    isAuth: false
}

export const RegisterReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

