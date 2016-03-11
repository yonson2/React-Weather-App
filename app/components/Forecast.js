var React = require('react');
var PropTypes = React.PropTypes;
var Loading = require('./Loading');
var parser = require('../utils/parser');
var Link = require('react-router').Link;

var styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center'
  },
  subheader: {
    fontFamily: 'monospace',
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  weather: {
    height: 130
  },
  dayBox: {
    margin: '15px',
    textTransform: 'capitalize',
    color: 'MediumVioletRed',
    cursor: 'pointer'
  }
}

function Day (props) {
  var date = props.info.dt;
  var weatherDesc = props.info.weather[0].description;
  return (
    <div style={styles.dayBox} onClick={props.handleClick}>
        <h1>{weatherDesc}</h1>
        <h2 style={styles.subheader}>{parser.getDate(date)}</h2>
    </div>
  )
}

function DaysWrapper (props) {
  return (
    <div>
      <h1 style={styles.header} >{props.city}</h1>
      <div style={styles.container}>
        {props.forecast.list.map(function(listItem) {
          return <Day key={listItem.dt} info={listItem} handleClick={props.handleClick.bind(null, listItem)} />
        })}
      </div>
    </div>
  )
}
function Forecast (props) {
  return props.isLoading
    ? <Loading />
  : <DaysWrapper city={props.city} forecast={props.forecast} handleClick={props.handleClick}/>
}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}
module.exports = Forecast;
