var React = require('react');
var styles = {
  text: {
    color: 'white',
    fontSize: '40px'
  },
  mt: {
    marginTop: '20%'
  }
}
var Home = React.createClass({
  render: function () {
    return (
      <div className='home-container col-sm-6 col-sm-offset-3 text-center' style={styles.mt}>
        <h1 style={styles.text}>Enter a city and State</h1>
        <div className="col-sm-8 col-sm-offset-2">
          <form>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="St. George, Utah"
                type="text" />
            </div>
            <div className="form-group col-sm-6 col-sm-offset-3">
              <button
                className="btn btn-md btn-success"
                type="submit">
                Get Weather
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
});

module.exports = Home
