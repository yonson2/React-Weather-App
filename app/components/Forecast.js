var React = require('react');

function Forecast (props) {
  return (
    <p>{props.routeParams.city}</p>
  )
}

module.exports = Forecast;
