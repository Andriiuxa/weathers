import React, { Component } from "react";
import Header from "./atoms/Header";
import { fetchWeathersAction } from "../redux/actions/weathersActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./style.scss";

class App extends Component {
  constructor(props) {
    super(props);
    props.fetchWeathers();
  }

  render() {
    const { error, loading, weathers } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading || !weathers) {
      return <div>Loading...</div>;
    }

    return (
      <div className="main-container">
        <Header>SnapHunt Weathers</Header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weathers: state.weathers.weathers,
  loading: state.weathers.loading,
  error: state.weathers.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchWeathers: fetchWeathersAction
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
