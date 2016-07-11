const React = require('react')
const ReactDOM = require('react-dom')
const StyleSheet = require('stilr')
const styles = require('./style')

class Editor extends React.Component {
  render () {
    return (
      <textarea className={styles.editor} />
    )
  }
}

ReactDOM.render(
  <Editor />,
  document.getElementById('content')
)

document.querySelector('style').textContent = StyleSheet.render()
