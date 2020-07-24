import React from "react";
import s from './Registration.module.css';
import {Input} from "../../../p1-main/m1-ui/u1-common/input/Input";
import {Button} from "../../../p1-main/m1-ui/u1-common/button/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../p1-main/m2-bll/store";


export const Registration = () => {

    const reg: any = useSelector<AppStateType>((state) => state.registration)

    const onClick = () => {

    }
    const onChange = () => {

    }

    return (
        <form className={s.regForm}>
            <Input
                inputType={reg.inputType[0]}
                inputPlaceholder={reg.inputPlaceholder[0]}
                value={reg.value}
                onChange={onChange}

            />
            <Input
                inputType={reg.inputType[0]}
                inputPlaceholder={reg.inputPlaceholder[1]}
                value={reg.value}
                onChange={onChange}

            />
            <Input
                inputType={reg.inputType[1]}
                inputPlaceholder={reg.inputPlaceholder[2]}
                value={reg.value}
                onChange={onChange}

            />
            <Button buttonTitle={reg.buttonTitle}/>
        </form>
    )
}