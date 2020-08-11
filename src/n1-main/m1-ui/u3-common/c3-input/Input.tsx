import React, {ChangeEvent} from 'react';
import '../../../m0-styles/input.scss';

type OwnPropsType = {
    inputType: string
    value?: string
    placeholder?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: OwnPropsType) => {
    return (
        <div className='inputForm'>
            <input onChange={props.onChange} type={props.inputType} value={props.value}
                   placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;