import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
    {message:'Hi, how are you?', likesCount: 4, id:'1'},
    {message:'Its my first post', likesCount: 1, id:'2'},
    {message:'yesd', likesCount: 12, id:'3'},
]

let dialogsData = [
    {name: 'Victor', id: '1'},
    {name: 'Anton', id: '2'},
    {name: 'Andrey', id: '3'},
    {name: 'Sveta', id: '4'},
    {name: 'Anna', id: '5'},
    {name: 'Dmitry', id: '6'},
]

let messagesData = [
    {message: 'Hi', id: '1'},
    {message: 'How are you?', id: '2'},
    {message: 'fdsfdsa', id: '3'},
]



ReactDOM.render(
    <React.StrictMode>
        <App postsData={postsData}
             dialogsData={dialogsData}
             messagesData={messagesData}/>

    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
