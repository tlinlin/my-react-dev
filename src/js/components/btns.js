import React from 'react';
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
    render() {
        return(
            <button onClick={this.gonext}>点击到about页</button>
        );
    }
}

export default withRouter(Btns);