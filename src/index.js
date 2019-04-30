import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import Header from "../src/components/atoms/Header";
import "./style.scss";

WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "sans-serif"]
  }
});

function App() {
  return (
    <div className="main-container">
      <Header>SnapHunt Weathers</Header>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
