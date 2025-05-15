// Write your code here
import './index.css'

import {Component} from 'react'

class Stopwatch extends Component {
  state = {timeInSeconds: 0, isRunning: false}

  intervalId = null

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  startTimer = () => {
    const {isRunning} = this.state
    if (!isRunning) {
      this.setState({
        isRunning: true,
      })
      this.intervalId = setInterval(() => {
        this.setState(PrevState => ({
          timeInSeconds: PrevState.timeInSeconds + 1,
        }))
      }, 1000)
    }
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({
      isRunning: false,
    })
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({
      timeInSeconds: 0,
      isRunning: false,
    })
  }

  formatTime = () => {
    const {timeInSeconds} = this.state
    const minutes = String(Math.floor(timeInSeconds / 60)).padStart(2, '0')
    const seconds = String(timeInSeconds % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="timer-container">
          <div className="timer-logo-and-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-container-heading">Timer</p>
          </div>
          <h1 className="timer-container-time">{this.formatTime()}</h1>
          <div className="buttons-container">
            <button
              type="button"
              className="button start-btn"
              onClick={this.startTimer}
            >
              Start
            </button>
            <button
              type="button"
              className="button stop-btn"
              onClick={this.stopTimer}
            >
              Stop
            </button>
            <button
              type="button"
              className="button reset-btn"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
