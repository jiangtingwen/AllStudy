import React, { Component } from 'react';
let generateId = 0;
class DynamicFiled extends Component {
    state = {  
        data: [
            {name:'name1',age:19,id:0}
        ]
    }
    handleValueChange = (key,value,id) => {
        //不可变数据
        let data = this.state.data.slice(0);
        let index = data.findIndex((item) => item.id === id)
        data[index][key] = value
        this.setState({
            data
        })
    }
    handleDelete = (id) => {
        let data = this.state.data.slice(0)
        let index = data.findIndex((item) => item.id === id)
        data.splice(index,1)
        this.setState({
            data
        })
    }
    handleAdd = () => {
        let data = this.state.data.slice(0)
        generateId++;
        data.push({
            name:'',age:0,id:generateId
        })
        this.setState({
            data
        })
    }
        render() { 
        const {data} = this.state;
        return ( 
            <>
            {data.map((filedData,i) => {
                return (
                    <Field key={filedData.id} 
                      filedData={filedData} onFieldValueChange={this.handleValueChange}
                      onFieldDelete={this.handleDelete} />
                )
            })}
            <br />
            <button onClick={this.handleAdd}>添加</button>
            <br/>
            <button>提交</button>
            </>
         );
    }
}
class Field extends Component {
    state = {  }
    handleFiledChangeName = (e) => {
        const name = e.target.value;
        const id =parseInt(e.target.dataset.id)
        const {onFieldValueChange} = this.props;
        onFieldValueChange('name',name,id)
    }
    handleFiledChangeAge = (e) => {
        const age = e.target.value;
        const id = parseInt(e.target.dataset.id)
        const {onFieldValueChange} = this.props;
        onFieldValueChange('age',age,id)
    }
    handleDelete = (e) => {
     const id = parseInt(e.target.dataset.id)
     const {onFieldDelete} = this.props
     onFieldDelete(id)
    }
 
    render() { 
        const {filedData} = this.props;
        const {name,age} = filedData;
        return ( 
            <div>
                姓名:<input type="text" value={name}
                data-id={filedData.id}
                onChange={this.handleFiledChangeName}/>
                年龄:<input type="number" value={age} 
                data-id={filedData.id}
                onChange={this.handleFiledChangeAge}/>
                <button data-id={filedData.id} onClick={this.handleDelete}>删除</button>
            </div>
            );
    }
}
export default DynamicFiled;