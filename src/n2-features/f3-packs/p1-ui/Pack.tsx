import React, {useState} from 'react';
import classes from "./Pack.module.css";
import del from '../../../n0-assets/icons8-delete-50.png';
import update from '../../../n0-assets/icons8-update-left-rotation-50.png';
import {NavLink} from "react-router-dom";
import {PackType} from "../p2-bll/PacksReducer";

type Props = {
    deletePack: (packId: string) => void
    cardPacks: Array<PackType>
}
export const Pack = React.memo(({deletePack, cardPacks, }: Props) => {
    const [isHidden, setIsHidden] = useState(true);
    return (
        <div className={classes.packTable}>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Grade</th>
                    <th>Setting</th>
                    <th>Links</th>
                </tr>
                {cardPacks.map(p => <tr key={p._id}>
                    <td>{p.name}</td>
                    <td>{p.grade} </td>
                    <td>
                        <img onClick={() => deletePack(p._id)} src={del} alt="delete"/>
                        <img src={update} alt="delete"/>
                    </td>
                    <td className={classes.links}>
                        <NavLink to={`/card/${p._id}`}>Cards </NavLink>
                        <NavLink onClick={() => setIsHidden(false)} to={`/learn/${p._id}`}>Learn</NavLink>
                    </td>
                </tr>)}
            </table>
        </div>
    );
});

