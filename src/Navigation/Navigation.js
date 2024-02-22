import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'

import './Navigation.css'

function Navigation({handleInputChange, query}) {
  return (
    <nav>
      <div className='nav-container'>
        <input 
          type='text' 
          className='search-input' 
          placeholder='Search shoes'
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className='profile-container'>
        <a href='#'>
          <FiHeart className='nav-icon'/>
        </a>
        <a href='#'>
          <AiOutlineShoppingCart className='nav-icon'/>
        </a>
        <a href='#'>
          <AiOutlineUserAdd className='nav-icon'/>
        </a>
      </div>    
    </nav>
  )
}

export default Navigation