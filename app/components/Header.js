var React = require('react');
var Link = require('react-router').Link;

var styles = {
  nav: {
    backgroundColor: '#FC6C43',
    borderColor: '#FC6C43',
  },
  font: {
    color: 'white'
  }
}
function Header (props) {
  return (
    <nav className="navbar navbar-default navbar-static-top" style={styles.nav}>
      <div className="container">
        <div className="navbar-header">
          <Link to='/' className='navbar-brand' style={styles.font}>{props.header}</Link>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
        </div>
      </div>
    </nav>
  )
}

module.exports = Header;
