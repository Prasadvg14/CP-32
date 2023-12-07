// Write your code here
import {Component} from 'react'

import './index.css'

const regStatusesInfo = {
  initial: 'INITIAL',
  registered: 'REGISTERED',
  yet_to_reg: 'YET_TO_REGISTER',
  reg_closed: 'REGISTRATIONS_CLOSED',
}

class ActiveEvenRegistrationDetails extends Component {
  renderInitial = () => (
    <div className="initial">
      <p>Click on an event, to view its registration Details</p>
    </div>
  )

  renderRegistered = () => (
    <div className="reg">
      <img
        className="tick"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h2>You have already registered for the event</h2>
    </div>
  )

  renderYetToReg = () => (
    <div className="reg">
      <img
        className="yet"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="btnr">
        Register Here
      </button>
    </div>
  )

  renderRegClosed = () => (
    <div className="reg">
      <img
        className="yet"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h2>Registrations Are Closed Now!</h2>
      <p>Stay tuned. We will reopen the registrations soon!</p>
    </div>
  )

  render() {
    const {regStatus} = this.props

    switch (regStatus) {
      case regStatusesInfo.registered:
        return this.renderRegistered()
      case regStatusesInfo.yet_to_reg:
        return this.renderYetToReg()
      case regStatusesInfo.reg_closed:
        return this.renderRegClosed()
      default:
        return this.renderInitial()
    }
  }
}

export default ActiveEvenRegistrationDetails
