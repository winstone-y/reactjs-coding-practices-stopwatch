// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {minutes: 0, seconds: 0}

  onStart = () => {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    this.setState({minutes: 0, seconds: 0})
    clearInterval(this.timerId)
  }

  tick = () => {
    const {minutes, seconds} = this.state
    if (seconds < 59) {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    } else if (seconds === 59) {
      this.setState(prevState => ({seconds: 0, minutes: prevState.minutes + 1}))
    } else if (minutes === 59 && seconds === 59) {
      clearInterval(this.timerId)
      this.setState({minutes: 0, seconds: 0})
    }
  }

  render() {
    const {minutes, seconds} = this.state
    return (
      <div className="app-bg">
        <div className="clock-container">
          <h1 className="title">Stopwatch</h1>
          <div className="stopwatch">
            <div className="timer">
              <img
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png 
              "
                className="timer-img"
              />
              <p className="timer-title">Timer</p>
            </div>
            <h1 className="stopwatch-display">
              {minutes > 9 ? minutes : `0${minutes}`}:
              {seconds > 9 ? seconds : `0${seconds}`}
            </h1>
            <div className="control-buttons">
              <button
                onClick={this.onStart}
                type="button"
                className="btn btn-1"
              >
                Start
              </button>
              <button onClick={this.onStop} type="button" className="btn btn-2">
                Stop
              </button>
              <button
                onClick={this.onReset}
                type="button"
                className="btn btn-3"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
