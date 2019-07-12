import React from 'react';
import logo from './logo.svg';
import toast from './toast/toast';
import './App.css';
/**
 * toast:{
 * success: () => {}
 * Loading: () => {}
 * }
 *  */
const openNotificationWithIcon = (type) => {
  toast[type]('message')
}
function App() {
  return (
    <div>
    <button onClick={() => openNotificationWithIcon('success')}>Success</button>
    <button onClick={() => openNotificationWithIcon('info')}>Info</button>
    <button onClick={() => openNotificationWithIcon('warning')}>Warning</button>
    <button onClick={() => openNotificationWithIcon('error')}>Error</button>
    <button onClick={() => openNotificationWithIcon('error')}>Loading</button>
  </div>
  );
}

export default App;
