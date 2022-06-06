import React from 'react'
import PropTypes from 'prop-types'

const fabric = window.fabric

class Rectangle extends React.Component {
  static propTypes = {
    canvas: PropTypes.object,
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    fill: PropTypes.string.isRequired,
  }

  static defaultProps = {
    top: 0,
    left: 0,
    width: 20,
    height: 20,
    fill: 'red',
    
    
  }

  componentDidMount() {
    const rectangle = new fabric.Rect(this.props)
    this.props.canvas.add(rectangle)
  }

  render() {
    return null
  }
}

export default Rectangle;
