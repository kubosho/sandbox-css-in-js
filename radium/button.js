const Radium = require('radium')
const React = require('react')

const styles = {
  button: {
    padding: '0.5rem 1.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#000',
    color: '#fff'
  }
}

class Button extends React.Component {
  render() {
    return (
      <button style={styles.button}>test</button>
    )
  }
}

module.exports = Radium(Button)
