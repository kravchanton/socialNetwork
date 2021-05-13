import React from "react";
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    name: string
    id: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogItem;