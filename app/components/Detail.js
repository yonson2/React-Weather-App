var React = require('react');
var parser = require('../utils/parser');
function Detail (props) {
  return (
    <div>
      <h1>{props.routeParams.city}</h1>
      <p>{parser.getDate(props.location.state.weather.dt)}</p>
      <p>{props.location.state.weather.clouds} Clouds.</p>
      <p>{props.location.state.weather.weather[0].description}</p>
      <p>Min temp: {parser.convertTemp(props.location.state.weather.temp.min)} degrees.</p>
      <p>Max temp: {parser.convertTemp(props.location.state.weather.temp.max)} degrees.</p>
    </div>
  )
}
module.exports = Detail;
