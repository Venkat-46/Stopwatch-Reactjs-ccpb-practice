// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeInseconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  clearTimeIntervel = () => clearInterval(this.timerId)

  onResetTimer = () => {
    this.clearTimeIntervel()
    this.setState({isTimerRunning: false, timeInseconds: 0})
  }

  onStopTimer = () => {
    this.clearTimeIntervel()
    this.setState({isTimerRunning: false})
  }

  tick = () => {
    this.setState(prevState => ({timeInseconds: prevState.timeInseconds + 1}))
  }

  onStartTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isTimerRunning: true})
  }

  stopwatchTime = () => {
    const {timeInseconds} = this.state
    const minutes = Math.floor(timeInseconds / 60)
    const seconds = Math.floor(timeInseconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="app-container">
        <div className="timer-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="timer-section">
            <div className="timer-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="st-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1>{this.stopwatchTime()}</h1>
            <div className="controll-buttons-container">
              <button
                type="button"
                className="button start-button"
                disabled={isTimerRunning}
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="button stop-button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="button reset-button"
                onClick={this.onResetTimer}
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
export default Stopwatch
