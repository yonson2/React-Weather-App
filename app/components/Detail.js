var React = require('react');
function Detail (props) {
  console.log(props.location.state.weather);
  return (
    <p>Detail!</p>
  )
}
module.exports = Detail;
