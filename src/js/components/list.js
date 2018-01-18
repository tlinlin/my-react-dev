import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// import PropTypes from 'prop-types'; 传参验证用
@withRouter
class NumberList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numbers : [1, 2, 3, 4]
        };
    }

    componentDidMount() {
        console.log('页面渲染完成about页面+ 下面跳转返回到首页');
        axios.get('http://localhost:9080/app/back')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        axios.post('http://localhost:9080/app/myhome')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
        // this.props.history.push('/'); // 手动跳转页面
    }

    render() {
        return (
            <ul>
                {this.state.numbers.map((number) =>
                    <li id={number} key={number.toString()}>{number}</li>
                )}
            </ul>
        );
    }
}
export default NumberList;