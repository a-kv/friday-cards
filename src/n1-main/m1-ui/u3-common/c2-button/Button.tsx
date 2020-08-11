import React from 'react';
import  "../../../m0-styles/button.scss";

type OwnPropTypes = {
    buttonName: string
    buttonType: string
    loading: boolean
    onClick: () => void
    buttonDisabled: boolean
}


const Button = (props: OwnPropTypes) => {
    let classAdd = '';
    if (props.buttonType === 'primary' ) {
        classAdd = 'primary';
    }
    if (props.buttonType === 'mini' ) {
        classAdd = 'danger';
    }
    let load;
    if (props.loading) {
        load = <img alt='loading' className='load'
                    src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'/>
    }

    if (props.loading) {
        classAdd = 'primary';
    }

    return (
        <div>
            <button disabled={props.buttonDisabled} className={'default' + ' ' + classAdd} onClick={props.onClick}>{load} {props.buttonName}</button>
        </div>
    );
}

export default Button;