// Write your code here
import {Component} from 'react'

import './index.css'

const statusOfItem = {
  registered: 'REGISTERED',
  yetToRegister: 'YET_TO_REGISTER',
  closed: 'REGISTRATIONS_CLOSED',
  progress: undefined,
}

class ActiveEventRegistrationDetails extends Component {
  state = {
    status: statusOfItem.progress,
  }

  renderYetToRegister = () => {
    const {status} = this.state
    console.log(status)
    return (
      <div className="yet-to-register-container">
        <img
          className="active-image1"
          src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
          alt="yet to register"
        />
        <p className="yet-to-p1">
          A live performance brings so much to your relationship with dance.
          Seeing dance live can often make you fall totally in love with this
          beautiful art form.
        </p>
        <button type="button" className="yet-to-button">
          Register Here
        </button>
      </div>
    )
  }

  renderRegistered = () => {
    const {status} = this.state
    console.log(status)
    return (
      <div className="registered-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
          alt=" registered"
          className="registered-img1"
        />
        <h1 className="registered-p1">
          You have already registered for the event
        </h1>
      </div>
    )
  }

  renderRegistrationsClosed = () => {
    const {status} = this.state
    console.log(status)
    return (
      <div className="closed-container">
        <img
          className="closed-img"
          src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
          alt=" registrations closed"
        />
        <h1 className="closed-h1">Registrations Are Closed Now!</h1>
        <p className="closed-p1">
          Stay tuned. We will reopen <br />
          the registrations soon!
        </p>
      </div>
    )
  }

  renderNoActiveElement = () => {
    const {status} = this.state
    console.log(status)
    return (
      <p className="active-h1">
        Click on an event, to view its Registration Details
      </p>
    )
  }

  renderPrimeDeals = () => {
    const {itemStatus} = this.props
    console.log('princy', itemStatus)
    switch (itemStatus) {
      case statusOfItem.yetToRegister:
        return this.renderYetToRegister()
      case statusOfItem.registered:
        return this.renderRegistered()
      case statusOfItem.closed:
        return this.renderRegistrationsClosed()
      case statusOfItem.progress:
        return this.renderNoActiveElement()
      default:
        return null
    }
  }

  render() {
    const {itemStatus} = this.props
    console.log('kavya', itemStatus)
    return (
      <>
        <div className="active-bg-container">{this.renderPrimeDeals()}</div>
      </>
    )
  }
}

export default ActiveEventRegistrationDetails
