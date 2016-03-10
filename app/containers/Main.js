var React = require('react');
var Header = require('../components/Header');
require('../main.css');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <Header header='React Weather App' />
        {this.props.children}
      </div>

    )
  }
});

module.exports = Main
