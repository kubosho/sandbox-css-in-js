const StyleSheet = require('stilr')
const React = require('react')

const styles = StyleSheet.create({
  button: {
    padding: '0.5rem 1.5rem',
    border: 0,
    borderRadius: 4,
    backgroundColor: '#000',
    color: '#fff'
  }
})

class Button extends React.Component {
  render() {
    return (
      <button className={styles.button}>test</button>
    )
  }
}

module.exports = Button
