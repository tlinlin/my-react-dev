import React from 'react';
import { mixins, testable } from '../mixins/mixins';

@mixins()
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'one',
            age: 0
        };
        this.itemChange  =this.itemChange.bind(this);
        this.btnClick = this.btnClick.bind(this);
    }

    itemChange(e){
        const name = e.target.name;
        this.setState({[name]: e.target.value});
        console.log(this.state.name);
    }

    btnClick() {
        console.log(this.state.name);
        
    }

    render(){
        return (
            <div>
                <form>
                    <label>
                        your name:
                        <input type="text" name='name' value = {this.state.name} onChange={this.itemChange}/>
                    </label>
                    <label>
                        your age:
                        <input type="text" name='age' value = {this.state.age} onChange={this.itemChange}/>
                    </label>
                    <p>姓名：{this.state.name}</p>
                    <p>年龄：{this.state.age}</p>
                </form>
            </div>
        );
    }
}

export default Form;