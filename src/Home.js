import React from 'react'
import Header from './Header.js'
import './Home.css'
import Product from './Product'

const Home = () => {
    return (
        <>
            <Header />
            <div className='home'>
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="Home" className="home__image"/>
                    <div className="home__row">
                        <Product title={"Amazfit GTR Mini Smart Watch for Men,14-Day Battery Life, Sports Watch with GPS, 5 Satellite Positioning Systems, Fitness Health Tracker with Heart Rate, SPO₂ Monitoring,5"}
                            price={30}
                            image={"/images/product_1.jpg"}
                            rating={5}
                            id={1}/>
                        <Product title={"Amazfit GTR Mini Smart Watch for Men,14-Day Battery Life, Sports Watch with GPS, 5 Satellite Positioning Systems, Fitness Health Tracker with Heart Rate, SPO₂ Monitoring,5"}
                            price={55}
                            image={"/images/product_2.jpg"}
                            rating={4}
                            id={2}/>
                    </div>
                    <div className="home__row">
                        <Product title={"Amazfit GTR Mini Smart Watch for Men,14-Day Battery Life, Sports Watch with GPS, 5 Satellite Positioning Systems, Fitness Health Tracker with Heart Rate, SPO₂ Monitoring,5"}
                            price={15}
                            image={"/images/product_3.jpg"}
                            rating={3}
                            id={3}/>
                        <Product title={"Amazfit GTR Mini Smart Watch for Men,14-Day Battery Life, Sports Watch with GPS, 5 Satellite Positioning Systems, Fitness Health Tracker with Heart Rate, SPO₂ Monitoring,5"}
                            price={30}
                            image={"/images/product_4.jpg"}
                            rating={2}
                            id={4}/>
                        <Product title={"Amazfit GTR Mini Smart Watch for Men,14-Day Battery Life, Sports Watch with GPS, 5 Satellite Positioning Systems, Fitness Health Tracker with Heart Rate, SPO₂ Monitoring,5"}
                            price={30}
                            image={"/images/product_5.jpg"}
                            rating={4}
                            id={5}/>
                    </div>
                    <div className="home__row">
                        <Product title={"Amazfit GTR Mini Smart Watch for Men,14-Day Battery Life, Sports Watch with GPS, 5 Satellite Positioning Systems, Fitness Health Tracker with Heart Rate, SPO₂ "}
                            price={1569}
                            image={"/images/product_6.jpg"}
                            rating={5}
                            id={6}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
