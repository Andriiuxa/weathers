import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store";

import "./style.scss";

WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "sans-serif"]
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
