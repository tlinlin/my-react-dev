import React from 'react';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import Hello from '../components/hello';
import Form from '../components/form';

import Topics from '../components/routermatch';
import Btns from '../components/btns';
import Bundle from '../utils/lazyload';
import loadSomething from 'bundle-loader?lazy!../components/hello';
import List from 'bundle-loader?lazy!../components/list';
const myHello = () => (
    <Bundle load={loadSomething}>
        {
            (mod) => {
                console.log(2222222222222);
                return true;
            }
        }
    </Bundle>);
const myList = () => (
    <Bundle load={List}>
        {
            (mod) => {
                console.log(333333333);
                return true;
            }
        }
    </Bundle>);

class RouterConfig extends React.Component {
    constructor(props){
        super(props);
    }

    render() {        
        return (
            <BrowserRouter  basename="/">
                <div>
                    <ul>
                        <li><Link to="/">首页</Link></li>
                        <li><Link to="/about">关于</Link></li>
                        <li><Link to="/others">其他路径</Link></li>
                    </ul>
                    <Btns/>
                    <hr/>
                    <Route exact path="/" component={myHello}/>
                    <Route path="/about" component={myList}/>
                    <Route path="/:user" component={Hello}/>
                </div>
            </BrowserRouter>
        );

    }

}
export default  RouterConfig;