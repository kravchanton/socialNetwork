import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem, {DialogItemType} from "./DialogItem/DialogItem";
import Message from "./Message/DialogMessages";
import {AppType, DialogType} from "../../App";

const Dialogs = (props: DialogType ) => {

    let dialogsElements = props.dialogsData.map((t) => <DialogItem name={t.name} id={t.id}/>)
    let messegesElements = props.messagesData.map((t) => <Message message={t.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messegesElements}

            </div>
        </div>)
}
export default Dialogs;