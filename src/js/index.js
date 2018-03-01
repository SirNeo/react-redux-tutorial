// import FormContainer from './components/container/FormContainer';
// import ExampleComponent from './components/ExampleComponent';

//import store from "../js/store/index";




import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../js/store/index";
import App from "../js/components/App";

// Para probar store desde la consola
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);