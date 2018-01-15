import React from 'react';
import Fun from './funcomponents';
import './../../styles/Hello.less';
import List from './list';
import Form from './form';
export default class Hello extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            age: 0,
            startDate : '',
            endDate : '',
            weekNum : ''
        };
        this.itemChange  =this.itemChange.bind(this);
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

    itemChange(e){
        const name = e.target.name;
        this.setState({[name]: e.target.value});
        console.log(this.state.name);
        this.weekRange(2017, 4, 1);
    }

    //计算某年的第多少周的日期区间
    weekRange(year = 2018, num, weekNum) { //year 年份， num 每一年的4号， weekNum 第几周
        const thur = new Date(year+'/1/'+num); // 1月4号
        const firstWeek = thur.getDay();
        const mond = thur.getTime() - (firstWeek-1)*24*60*60*1000;
        const startDateMond = (weekNum-1)*7*24*60*60*1000 + mond; // 10周X7天x24小时X60分钟X60秒X1000毫秒
        const endDateSund = (weekNum*7-1)*24*60*60*1000 + mond;
        console.log(this.formatdate(mond),'第一周开始时间');
        console.log(this.formatdate(startDateMond),'开始时间星期一');
        console.log(this.formatdate(endDateSund),'结束时间星期天');
        return {startDate:startDateMond, endDate:endDateSund};
    }

    formatdate(date) {
        return `${new Date(date).getFullYear()}${new Date(date).getMonth()-1}-${new Date(date).getDate()}`;
    }
    render() {
        return (
            <div>
                <h1 className="title">{this.state.date.toLocaleTimeString()} Hello World {this.props.name}！</h1>
                <span className="icon-zhongguoyidong"></span>
                <button onClick={this.activateLasers.bind(this)}>点击暂停时间</button>
                <button onClick={this.activeTime.bind(this)}>点击开始时间</button>
                <button onClick={(e) => {this.activeTime(e);}}>点击开始时间</button>
                <label>
                    your name:
                    <input type="text" name='weekNum' value = {this.state.weekNum} onChange={this.itemChange}/>
                </label>
                <p>{this.state.weekNum}</p>
            </div>
        );
    }
}