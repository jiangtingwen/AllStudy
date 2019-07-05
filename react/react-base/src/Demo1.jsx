import React,{Component} from 'react'; 
class Demo1 extends Component {
    render() {
        console.log(this.props)
        return (
            <div style={{backgroundColor:'red'}} onClick={()=>{
                const {onClick} = this.props;
                onClick('内容来自 子组件');
            }}>
                Demo1
            </div>
        )
    }
}
export default Demo1