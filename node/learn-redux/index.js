const { createStore, combineReducers } = require('redux');

// action.type 常量 决定了这次dispatch要干什么
// reducer 可以收到action的信息
const add = {
  type: 'increment'
}
const reduce = {
  type: 'decrement'
}

function reducer (state, action) {
  // console.log('reducer触发了');
  console.log('reducer--->', action);
  if (action.type === 'increment') {
    return state + 1;
  } else if (action.type === 'decrement') {
    return state - 1;
  } else {
    return 0;
  }
}
// 加 ADD_FILM
function filmReducer (state = [], action) {
  switch (action.type) {
    case 'ADD_FILM':
      return [...state, ]
    default:
      return state;
  }
}

const index = combineReducers({
  count: reducer,
  films: filmReducer
})
// createStore只接收reducer
const store = createStore(index);
store.subscribe(() => {
  console.log(store.getState());
});
// console.log(store.getState());  // 0
store.dispatch(add);
store.dispatch(add);
// console.log(store.getState());
store.dispatch(reduce);
// console.log(store.getState());
