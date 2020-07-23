
type initialStateType = {
    buttonName: string
    loading: boolean
    inputType: Array<string>
    inputPlaceholder: Array<string>
    value?: string
    isAuth: boolean
}

const initialState: initialStateType = {
    buttonName: 'Sing in',
    loading: false,
    inputType: ['text', 'password'],
    inputPlaceholder: ['  E-mail', '  Password'],
    isAuth: false
}

export const LoginReducer = (state: initialStateType = initialState, action : any) => {
    return state;
}

