import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/navbar";
import Profile from "./components/Profile/profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/news";
import Music from "./components/Music/music";
import Settings from "./components/Settings/settings";
import {DialogItemType} from "./components/Dialogs/DialogItem/DialogItem";
import {MessageType} from "./components/Dialogs/Message/DialogMessages";


export type MyPostType = {
    message: string,
    likesCount: number,
    id?: string
}

export type PostsDataType = {
    postsData: Array<MyPostType>
}
export type AppType = {
    postsData: Array<MyPostType>
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
}

export type DialogType = {
    dialogsData: Array<DialogItemType>
    messagesData: Array<MessageType>
}
const App = (props: AppType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={()=> <Profile postsData={props.postsData}/>} />
                    <Route path='/dialogs' render={()=> <Dialogs dialogsData={props.dialogsData}
                                                                 messagesData={props.messagesData}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>

                </div>
            </div>
        </BrowserRouter>

    )
}


export default App;
