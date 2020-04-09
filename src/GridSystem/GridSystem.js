import React, { Component } from 'react';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import ReactGrid from './ReactGrid'

class App extends Component {
  constructor(props) {

    super(props)
    let OrientationStatus = "", columns = 0, rows = 0
    if (windowWidth > windowHeight) {
      // Write Your own code here, which you want to execute on Landscape Mode.
      OrientationStatus = 'Landscape Mode'
      columns = 8
      rows = 4

    } else {
      // Write Your own code here, which you want to execute on Portrait Mode.
      OrientationStatus = 'Portrait Mode'
      columns = 4
      rows = 8
    }
    let arrayColumns = [], arrayRows = []
    for (let index = 0; index < columns; index++) {
      arrayColumns.push(index)
    }
    for (let index = 0; index < rows; index++) {
      arrayRows.push(index)
    }

    this.state = { OrientationStatus, windowWidth, windowHeight, rows, columns, arrayColumns, arrayRows }

  }


  componentDidMount() {
    Dimensions.addEventListener('change', () => {
      let OrientationStatus = "", columns = 0, rows = 0, windowWidth = Dimensions.get('window').width, windowHeight = Dimensions.get('window').height

      if (windowWidth > windowHeight) {
        // Write Your own code here, which you want to execute on Landscape Mode.
        OrientationStatus = 'Landscape Mode'
        columns = 8
        rows = 4
        windowHeight = windowHeight

      } else {
        // Write Your own code here, which you want to execute on Portrait Mode.
        OrientationStatus = 'Portrait Mode'
        columns = 4
        rows = 8
      }
      let arrayColumns = [], arrayRows = []
      for (let index = 0; index < columns; index++) {
        arrayColumns.push(index)
      }
      for (let index = 0; index < rows; index++) {
        arrayRows.push(index)
      }

      this.setState({
        OrientationStatus,
        windowWidth,
        windowHeight,
        rows,
        columns,
        arrayColumns,
        arrayRows,
      })
    })
  }

  render() {
    return (
      <ReactGrid {...this.state} />
    )
  }
}

export default App;