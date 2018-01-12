import React from 'react';
export default function (props) {
    return (
        <div>
            <h1 className = "title">组件的标题</h1>
            <div>{props.data}</div>
            <img src="./images/four.gif"></img>
        </div>
    );
}