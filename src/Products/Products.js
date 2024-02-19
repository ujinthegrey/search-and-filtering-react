import './Products.css'

import { FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

function Products() {
  return <>
      <section className='card-container'>
        <article className='card'>
          <img 
            className='card-img' 
            src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'
            alt='product'
          />
          <div className='card-details'>
            <h3 className='card-title'>Nike Air Monarch IV</h3>
            <section className='card-reviews'>
              <FaStar className='rating-star'/>
              <FaStar className='rating-star'/>
              <FaStar className='rating-star'/>
              <FaStar className='rating-star'/>
              <span className='total-reviews'>4</span>
            </section>
            <section className='card-price'>
              <div className='price'>
                <del>$300</del> $200
              </div>
              <div className='bag'>
                <FaBagShopping className='bag-icon'/>
              </div>

            </section>
          </div>

        </article>
      </section>
    </>
}

export default Products
