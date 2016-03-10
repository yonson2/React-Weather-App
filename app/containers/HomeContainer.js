var React = require('react');
var Home = require('../components/Home');
var weather = require('../utils/weather');

var HomeContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city: ''
    };
  },
  handleUpdateUser: function (e) {
    //Takes an event from the input field.
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitUser: function (e) {
    //Takes an event from the input field.
    //Prevent page reload
    e.preventDefault();
    console.log(this.state.city);
    weather.getCityWeather(this.state.city)
      .then(function (wInfo) {
        console.log(wInfo);
      });
  },
  render: function () {
    return (
      <Home
        onUpdateUser={this.handleUpdateUser}
        onSubmitUser={this.handleSubmitUser} />
    )
  }
});

module.exports = HomeContainer
