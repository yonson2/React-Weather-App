var React = require('react');
var PropTypes = React.PropTypes;
var CityFormContainer = require('../containers/CityFormContainer');
var styles = {
  text: {
    color: 'white',
    fontSize: '40px'
  },
  patternBg: {
    backgroundSize: 'cover',
    backgroundImage: "url('app/images/pattern.svg')",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  }
}

function Home (props) {
  return (
    <div style={styles.patternBg}>
      <h1 style={styles.text}>Enter a city and State</h1>
      <CityFormContainer direction='column' />
    </div>
  )
}
module.exports = Home;
