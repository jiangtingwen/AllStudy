npm i create-react-app -g
create-react-app --version
create-react-app react-base
cd react-base
yarn start
##react
 "react": "^16.8.6",
 "react-dom": "^16.8.6",

react:负责ui,用户看到的,规定组件写法
react-dom: 负责将组件渲染到浏览器上的
react-native: 负责将组件渲染到手机上

```js
ReactDOM.render(<App />,
document.getElementById('root'));
```
把app组件挂载到#root下面

##jsx
js + html  对应vue  template

认准哪个地方放什么东西

##组件
function App() {return} function component
class  class component