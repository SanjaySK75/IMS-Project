import React from 'react'
import './Home.css'
import Footer from './Footer'

export default function Home() {
  return (
    <div className='home-container'>
      <div className='home-safety'>
        <div className='hero-section'>
          <div className='hero-1'>
            <h1>Hi Sanjay,Good Morning</h1>
            <p>Your dashboard gives you views of key performance or business process.</p>
          </div>
          <div className='hero-2'>
            <div className='hero-3'>
              <div className='hero-img'>
                <img src='https://ik.imagekit.io/sk751508/Solo%20Project/1.png?updatedAt=1740717670699' alt='' height='40px' width='20px' />
              </div>
              <div>
                <h3>Total Sales</h3>
                <p>31.50</p>
              </div>
            </div>
            <div className='hero-3'>
              <div className='hero-img'>
                <img src='https://ik.imagekit.io/sk751508/Solo%20Project/2.png?updatedAt=1740717685210' alt='' height='45px' width='45px' />
              </div>
              <div>
                <h3>Total Cost</h3>
                <p>$ 4598</p>
              </div>
            </div>
          </div>
        </div>
        <div className='top-total'>
          <div className='top-products'>
            <div className='top-products-top'>
              <div>
                <h3>Top Products</h3>
              </div>
              <div>
                <select>
                  <option>Week</option>
                  <option>Month</option>
                  <option>Year</option>
                </select>
              </div>
            </div>
            <hr></hr>
            <div className='top-products-bottom'>
              <div className='pro'>
                <div className='pro-img'>
                  <img src='https://ik.imagekit.io/sk751508/Solo%20Project/03.png?updatedAt=1740719135805' alt='' height='120px' width='120px' />
                </div>
                <div>
                  <h3>Serum Bottle</h3>
                  <p>89 Item</p>
                </div>
              </div>

              <div className='pro'>
                <div className='pro-img'>
                  <img src='https://ik.imagekit.io/sk751508/Solo%20Project/01.png?updatedAt=1740719136831' alt='' height='120px' width='120px' />
                </div>
                <div>
                  <h3>Organic Cream</h3>
                  <p>89 Item</p>
                </div>
              </div>

              <div className='pro'>
                <div className='pro-img'>
                  <img src='https://ik.imagekit.io/sk751508/Solo%20Project/02.png?updatedAt=1740719138080' alt='' height='120px' width='120px' />
                </div>
                <div>
                  <h3>Rain Umbrella</h3>
                  <p>89 Item</p>
                </div>
              </div>
            </div>
          </div>
          <div className='best-item'>
            <div>
              <h2>Best Item All Time</h2>
            </div>

            <div className='best-item-1'>
              <div className='best-item-img'>
                <img src='https://ik.imagekit.io/sk751508/Solo%20Project/03.png?updatedAt=1740719135805' alt='' height='90px' width='70px' />
              </div>
              <div>
                <h3>Coffee Beans Packet</h3>
                <p>Total Sell : 45897</p>
                <p>Total Earned : $45,89 M</p>
              </div>
            </div>

            <div className='best-item-1'>
              <div className='best-item-img'>
                <img src='https://ik.imagekit.io/sk751508/Solo%20Project/01.png?updatedAt=1740719136831' alt='' height='90px' width='70px' />
              </div>
              <div>
                <h3>Coffee Beans Packet</h3>
                <p>Total Sell : 45897</p>
                <p>Total Earned : $45,89 M</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
