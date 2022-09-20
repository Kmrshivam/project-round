import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className="hero">
        <div className="card bg-dark text-white border-0">
            <img src="https://media.istockphoto.com/photos/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-picture-id1249219777?k=20&m=1249219777&s=612x612&w=0&h=CKxJKYasEiycTp_Y8JEjVj97wuyLzJYqOr1FdY0K9uE=" class="card-img" alt="Background" height="550px"/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <div className="container">
                    <h5 className="card-title dispaly-3 fw-bolder ">Diwali Offer</h5>
                    <h1 className="card-text dispaly-3 fw-bolder fs-4">Check Now</h1>
                </div>
            </div>
        </div>
        <Products/>
    </div>
  )
}

export default Home