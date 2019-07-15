import React, { Component } from 'react';
import propTypes from 'prop-types'
//static
// foo() {}
// foo = () => {}
class Context15 extends Component {
    state = { 
        theme:'red'
     }
     //后代组件从这里取信息
     getChildContext() {
         return {
            theme:this.state.theme
         }
     }
     // 第一种方法
    //  handleToggleTheme = (e) => {
    //     const theme = e.target.dataset.theme;
    //     this.setState({
    //         theme
    //     })
    //  }

    //第二种方法
    handleToggleTheme = (theme) => () => {
        this.setState({
            theme
        })
    }
    render() { 
        const msg = ['str1','str2','str3']
        return ( 
            <div>
                {
                    msg.map((item,i) => {
                        return(
                            <Message key={i} text={item} />
                        )
                    })
                }
                <button onClick={this.handleToggleTheme('purple')} data-theme="purple">purple</button>
                <button onClick={this.handleToggleTheme('yellowgreen')} data-theme="yellowgreen">yellowgreen</button>
            </div>
         );
    }
}
Context15.childContextTypes = {
    theme:propTypes.string
}
class Message extends Component {
    shouldComponentUpdate() {
        return true
    }
    render() {
        const {text} = this.props
        return (
            <li>
                {text}
                <MyButton />
            </li>
        )
    }
}
class MyButton extends Component{
    static contextTypes = {
        theme:propTypes.string
    }
    render() {
        const {theme} = this.context
        return (
            <button style={{color:theme}}> delete </button>
        )
    }
}
export default Context15;