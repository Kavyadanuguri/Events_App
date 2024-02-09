// Write your code here
import './index.css'

const EventItem = props => {
  const {itemDetails, updateContainerStatus} = props
  const {id, imageUrl, name, location, registrationStatus} = itemDetails
  console.log(registrationStatus)

  const getItemId = () => {
    updateContainerStatus(id)
  }

  return (
    <li className="event-item-list" key={id}>
      <button onClick={getItemId} className="btn" type="button">
        <img className="event-item-img" alt="event" src={imageUrl} />
      </button>
      <p className="event-item-h1">{name}</p>
      <p className="event-item-p">{location}</p>
    </li>
  )
}

export default EventItem
