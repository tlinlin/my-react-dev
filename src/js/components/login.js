import React from 'react';
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: 'zhangsan'
        };
    }

    render() {
        return (
            <div>登陆</div>
        );
    }
}