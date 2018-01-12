import React from 'react';
import Fun from './funcomponents';
import './../../styles/Hello.less';
import List from './list';
import Form from './form';
export default class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        console.log('页面渲染完成');
        this.activeTime();
    }
  
    componentWillUnmount() {
        console.log('页面将要释放');
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({date: new Date()});
    }

    activeTime() {
        if(this.timerId){
            return;
        }
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    activateLasers() {
        console.log(this);
        clearInterval(this.timerId);
        this.timerId = '';
    }

    render() {
        return (
            <div>
                <Form/>
                <List numbers={[1,2,3,4,5,6]}></List>
                <Fun data="this page is fun data"/>
                <h1 className="title">{this.state.date.toLocaleTimeString()} Hello World {this.props.name}！</h1>
                <span className="icon-zhongguoyidong"></span>
                <button onClick={this.activateLasers.bind(this)}>点击暂停时间</button>
                <button onClick={this.activeTime.bind(this)}>点击开始时间</button>
                <button onClick={(e) => {this.activeTime(e);}}>点击开始时间</button>
            </div>
        );
    }
}