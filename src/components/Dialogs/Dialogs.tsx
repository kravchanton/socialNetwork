import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemType = {
    name: string
    id: string
}
type MessageType = {
    message: string
}
const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = "/dialogs/" + props.id;
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message: React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogItem name='Victor' id='1'/>
                <DialogItem name='Anton' id='2'/>
                <DialogItem name='Dmitry' id='3'/>
                <DialogItem name='Sveta' id='4'/>
                <DialogItem name='Anna' id='5'/>

            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='fdsgds'/>
            </div>
        </div>)
}
export default Dialogs;