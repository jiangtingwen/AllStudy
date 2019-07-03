import * as React from 'react';  //MVVM
import * as ReactDOM from 'react-dom'; //render
// import { HelloComponent } from './hello';
import { Header, About} from './components';
ReactDOM.render(
  // <HelloComponent />,
  <div className="container-fluid">
    <Header />
    <About />
  </div>,
  document.getElementById('root')
);
// 根组件的