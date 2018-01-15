import React from 'react';
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom';
import Hello from '../components/hello';
import Form from '../components/form';
import List from '../components/list';
import Topics from '../components/routermatch';
import Btns from '../components/btns';
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
                    <Route exact path="/" component={Hello}/>
                    <Route path="/about" component={List}/>
                    <Route path="/:user" component={Hello}/>
                </div>
            </BrowserRouter>
        );

    }

}
export default  RouterConfig;