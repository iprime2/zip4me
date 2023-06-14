import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <Link to={`/product/${item?._id}`}>
      <div className='card'>
        <div className='image'>
          {item?.isNew && <span>New Season</span>}
          <img src={item?.img} alt='' className='mainImg' />
          <img src={item?.img2} alt='' className='secondImg' />
        </div>
        <h2>{item?.title}</h2>
        <div className='prices'>
          <h3>रु{item?.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
