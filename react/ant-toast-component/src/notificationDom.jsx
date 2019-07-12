import React, { Component } from 'react';
import ReactDOM from 'react-dom'
class Notification extends Component {
    state = { 
        notices: []
     }
     generateKey = () => {
         const { notices } = this.state;
         return `notice-${new Date().getTime()}-${notices.length}`
     }
     addNotice = (notice) => {
         const notices = this.state.notices.slice(0);
         const key = this.generateKey();
         notices.key = key;
         notices.push(notice);
         this.setState({
             notices
         })
     }
    render() { 
        return ( 
            <div>
                toast
            </div>
         );
    }
}
/**
 * <App>
 * <Notification>
 * </APP>
 *  */
function createNotification() {
    const div = document.createElement('div');
    document.body.appendChild(div);
    //可以获取组件的实例
    const ref = React.createRef();
    ReactDOM.render(<Notification ref={ref} />,div);
    return {
        addNotice(notice) {
            return ref.current
        }
    }
}