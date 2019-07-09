import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
//BrowserRouter 实现方式是通过h5的history api来实现的
import Layout from './page/Layout';
import 'antd/dist/antd.css';

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <Route path="/" component={Layout} />
      </Router>
  );
}

export default App;
