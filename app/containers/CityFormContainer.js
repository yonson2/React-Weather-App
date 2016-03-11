var React = require('react');
var CityForm = require('../components/CityForm');
var weather = require('../utils/weather');

var CityFormContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      city: ''
    };
  },
  getDefaultProps: function() {
    return {
      direction: 'column'
    };
  },
  handleUpdateCity: function (e) {
    //Takes an event from the input field.
    this.setState({
      city: e.target.value
    })
  },
  handleSubmitCity: function (e) {
    //Takes an event from the input field.
    //Prevent page reload
    e.preventDefault();
    this.context.router.push('/forecast/' + this.state.city);
  },
  render: function () {
    return (
      <CityForm
        onUpdateCity={this.handleUpdateCity}
        onSubmitCity={this.handleSubmitCity}
        city={this.state.city}
        direction={this.props.direction} />
    )
  }
});

module.exports = CityFormContainer
