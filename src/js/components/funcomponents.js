import React from 'react';
export default function (props) {
    console.log(props);
    return (
        <div>
            <h1 className = "title">组件的标题</h1>
            <div>这是接收到父组件的值{props.data}</div>
            <img src="./images/four.gif"></img>
        </div>
    );
}