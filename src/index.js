import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from './reducers';

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  , document.getElementById("root")
);


