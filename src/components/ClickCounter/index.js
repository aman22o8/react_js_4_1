// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg_container">
        <h1 className="main_heading">
          The Button has been clicked <br />
          <span className="counter">{count} </span>
          times
        </h1>
        <p className="middle_heading">Click the button to increase the count</p>
        <div>
          <button onClick={this.onIncrement} className="button" type="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
