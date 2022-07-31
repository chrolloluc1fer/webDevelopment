import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux'
import reducer from './redux/reducer';


const root = ReactDOM.createRoot(document.getElementById('root'));

let myStore = createStore(reducer)
root.render(
      <Provider store={myStore}>
            <App />
      </Provider>


);

