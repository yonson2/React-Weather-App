var React = require('react');
var weather = require('../utils/weather');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: {}
    };
  },
  componentDidMount: function() {
    weather.getForecast(this.props.routeParams.city)
      .then(function(forecast) {
        this.setState({
          isLoading: false,
          forecast: forecast.data
        })
        console.log(this.state.forecast);
      }.bind(this));
  },
  //TODO: PropTypes for Forecast component
  render: function () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecast={this.state.forecast} />
    )
  }
})
module.exports = ForecastContainer;
