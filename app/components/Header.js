var React = require('react');
var CityFormContainer = require('../containers/CityFormContainer');

var styles = {
  font: {
    color: 'white'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'rgba(252, 90, 44, 0.89)',
    color: '#fff',
    padding: '5px'
  }
}
function Header (props) {
  return (
    <div style={styles.header}>
      <h2 style={{margin: 0}}>Header text</h2>
      <CityFormContainer direction='row' />
    </div>
  )
}

module.exports = Header;
