import React, { Component } from 'react';
const ThemeContext = React.createContext();
class Context16 extends Component {

  state = { 
    theme: 'red'
  }
  handleToggleTheme = (theme) => {
    this.setState({
      theme
    })
  }
  render() {
    const msg = ['str1', 'str2', 'str3'];
    const {theme} = this.state
    return (
        <ThemeContext.Provider value={theme} />
      <div>
        {
          msg.map((item, i) => {
            return (
              <Message key={i} text={item}/>
            )
          })
        }
        <button onClick={this.handleToggleTheme.bind(this, 'purple')}
        data-theme="purple"
        >purple</button>
        <button onClick={() => {
          this.handleToggleTheme('yellowgreen')
        }}
        data-theme="yellowgreen"
        >yellowgreen</button>
      </div>
    );
  }
}
/**
 * function Person() {}
 * Person.childContextType = {}
 */

class Message extends Component {
  render() {
    const { text } = this.props;
    return (
      <li>
        { text }
        <MyButton />
      </li>
    )
  }
}
class MyButton extends Component{
    render() {
        return (
            <ThemeContext.Consumer>

            </ThemeContext.Consumer>
        )
    }
}
export default Context16;