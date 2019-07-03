// 约束一个对象必须拥有哪些属性或方法

//自定义类型
//interface是结构体,用分号隔开
export interface movie {
    name:string;
    title:string;
    id:string;
}
export interface State {
    movieList:movie[]
}
// let numArr:number[] = [1,2,3,4,5,true]