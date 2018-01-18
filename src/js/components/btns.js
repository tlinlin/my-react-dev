import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class Btns extends React.Component {
    constructor(props){
        super(props);
        this.gonext = this.gonext.bind(this);
    }
    gonext() {
        console.log(this.props);
        this.props.history.push('/about');
    }
    componentDidMount() {
        console.log('btns组件页面渲染完成');
        // Add a request interceptor
        axios.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        });

        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            // Do something with response data
            console.log(response, '全局拦截的部分');
            return response;
        }, function (error) {
            // Do something with response error
            return Promise.reject(error);
        });
    }
    render() {
        return(
            <button onClick={this.gonext}>点击到about页</button>
        );
    }
}

export default withRouter(Btns);