// Write your code here
import {Component} from 'react'
import './index.css'

class EventItem extends Component {
  render() {
    const {item, onClickEvent, activeId} = this.props
    const {id, imageUrl, name, location, registrationStatus} = item
    const onClickBtn = () => {
      onClickEvent(id, registrationStatus)
    }
    const className = activeId === id ? 'e-img active' : 'e-img'

    return (
      <li className="item">
        <button onClick={onClickBtn} type="button" className="btn">
          <img className={className} src={imageUrl} alt="event" />
        </button>
        <p className="p">{name}</p>
        <p className="p">{location}</p>
      </li>
    )
  }
}

export default EventItem
