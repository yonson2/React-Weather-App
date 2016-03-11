var React = require('react');
var weather = require('../utils/weather');
var Forecast = require('../components/Forecast');

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
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
        });
      }.bind(this));
  },
  handleClick: function (weather) {
    this.context.router.push({
      pathname: '/detail/' + this.props.routeParams.city,
      state: {
        weather: weather
      }
    })
  },
  render: function () {
    return (
      <Forecast
        city={this.props.routeParams.city}
        isLoading={this.state.isLoading}
        forecast={this.state.forecast}
        handleClick={this.handleClick}/>
    )
  }
})
module.exports = ForecastContainer;
