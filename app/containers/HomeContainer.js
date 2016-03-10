var React = require('react');
var Home = require('../components/Home');
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
    console.log(this.state.city)
  },
  handleSubmitUser: function (e) {
    //Takes an event from the input field.
    //Prevent page reload
    e.preventDefault();
    console.log(this.state.city);
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
