import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Icon } from 'antd';
import TouchableOpacity from './TouchableOpacity';

const size = 'large';
class App extends Component {
  constructor (props) {
    super(props);
    this.functionRef = null;
    this.objectRef = React.createRef();
    this.inputRef = React.createRef();
  }

  state = {
    value: ''
  }
  componentDidMount () {
    // 组件挂载在页面上
    // 通过原生js操作dom
    this.refs.strRef.innerHTML = 'String ref'
    this.functionRef.innerHTML = 'Function ref'
    // this.functionRef.addEventListener('click', () => {
    //   console.log('function ref clicked')
    // })
    this.objectRef.current.innerHTML = 'Object ref'
  }
  handlePrint1 = () => {
    console.log(this.inputRef.current.value);
  }
  handlePrint2 = () => {
    
  }
  handleInputChange = (e) => {
    let value = e.target.value;
    value = value.slice(0, 10);
    this.setState({ 
      value
    });
  }
  render () {
    return (
      <div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>

          <br />
          <Button type="primary" size={size}>
            Primary
          </Button>
          <Button size={size}>Normal</Button>
          <Button type="dashed" size={size}>
            Dashed
          </Button>
          <Button type="danger" size={size}>
            Danger
          </Button>
          <Button type="link" size={size}>
            Link
          </Button>
          <br />
          <Button type="primary" shape="circle" icon="download" size={size} />
          <Button type="primary" shape="round" icon="download" size={size}>
            Download
          </Button>
          <Button type="primary" icon="download" size={size}>
            Download
          </Button>
          <br />
          <Button.Group size={size}>
            <Button type="primary">
              <Icon type="left" />
              Backward
            </Button>
            <Button type="primary">
              Forward
              <Icon type="right" />
            </Button>
          </Button.Group>
        </div>
        <hr/>

        <button style={{background: 'red', border: 'none'}}>tmd按我</button>
        <hr/>
        <TouchableOpacity>
          确定
          <a href="">确定</a>
        </TouchableOpacity>
        <TouchableOpacity>取消</TouchableOpacity>
        <hr/>

        <h1 ref="strRef"></h1>
        <h1 ref={(node) => {
          this.functionRef = node;
        }}></h1>
        <h1 ref={this.objectRef}></h1>
        <hr/>
        {/* 非受控 */}
        <input type="text" ref={this.inputRef}/>
        <button onClick={this.handlePrint1}>btn1</button>
        {/* 受控 value */}
        <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
        <button onClick={this.handlePrint2}>btn2</button>
      </div>
    )
  }
}

export default App;
