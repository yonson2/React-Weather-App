var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        This is the header
        {this.props.children}
      </div>

    )
  }
});

module.exports = Main