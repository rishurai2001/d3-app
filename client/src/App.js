import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { setDataBase } from './actions/pointers';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import "core-js/stable";
import "regenerator-runtime/runtime";
 

const store = configureStore();
const url="/data";
fetch("data")
.then(res => res.json())
.then(data => {
  store.dispatch(setDataBase(data));
  console.log(data)
//   //ReactDOM.render(jsx, document.getElementById('app'));
});



const App  = () => {
  
  

  return (
    <div>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    <h1>Hello</h1>
    </div>
  );

};
export default App;