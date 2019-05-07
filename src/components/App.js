import React, { Component } from "react";
import Header from "./atoms/Header";
import WeatherCards from "./organisms/WeatherCards";
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
    const { error, loading, weathers, fetchWeathers } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading || weathers.length === 0) {
      return <div>We are loading your weathers, one sec :)</div>;
    }

    return (
      <div className="main-container">
        <Header>SnapHunt Weathers</Header>
        <WeatherCards weathers={weathers} fetchWeathers={fetchWeathers} />
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
