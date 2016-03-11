var React = require('react');
var Header = require('../components/Header');
//require('../main.css');
var styles = {
  container: {
    height: '92%',
    width: '100%'
  }
}
var Main = React.createClass({
  render: function () {
    return (
      <div style={styles.container}>
        <Header header='React Weather App' />
        {this.props.children}
      </div>

    )
  }
});

module.exports = Main
