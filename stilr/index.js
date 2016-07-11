const React = require('react')
const ReactDOM = require('react-dom')
const StyleSheet = require('stilr')
const Button = require('./button')

ReactDOM.render(
  <Button />,
  document.getElementById('content')
)

document.querySelector('style').textContent = StyleSheet.render()
