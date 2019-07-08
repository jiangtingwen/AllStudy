import React,{Component} from 'react';
import logo from './logo.svg';
import List from './List'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './App.css';
let generateID = 1
class App extends Component {
  state = {
    lists:[
      {name:'tom',age:19,school:'school1',id:0},
      {name:'tom1',age:19,school:'school2',id:1},
    ],
    commentList:[]
  }
  handleAddInfo = () => {
    const lists = this.state.lists.slice(0);
    generateID++;
    lists.push({name:'tom1',age:19,school:'school2',id:generateID});
    this.setState({
      lists
    })

  }
  handlePublish =(userName,commentContent) => {
    //push setState
    const commentList = this.state.commentList.slice(0)
    commentList.push({
      userName,
      commentContent
    })
    this.setState({
      commentList
    })

  }
  handleDelete = (id) => {
    console.log('父组件收到id',id)
    const lists = this.state.lists.slice(0)
    const index = lists.findIndex(list => list.id === id)
    lists.splice(index,1)
    this.setState({
      lists
    })
  }
  render() {
    const {lists, commentList} = this.state;
    return (
      <>
      <ul>
        <button onClick={this.handleAddInfo}>添加一条数据</button>
        {
          lists.map((list,i) => {
            return (

              <List key={list.id} list={list} onDelete={this.handleDelete}>
              </List>
            )
          })
        }
      </ul>
      <div>
        <CommentInput onPublish={this.handlePublish}/>
        <CommentList commentList={commentList}/>
      </div>
      </>
    )
  }
}


export default App;
