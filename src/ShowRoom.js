import { Button } from '@material-ui/core'
import React from 'react'
import Slider from 'react-slick'
import './ShowRoom.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'grey' }}
            onClick={onClick}
        />
    )
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <div
            className={className}
            style={{ ...style, display: 'block', background: 'grey' }}
            onClick={onClick}
        />
    )
}

const ShowRoom = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        className: 'slides',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div>
            <div className="slider-container">
                <h3>Our Favourite Kits</h3>
            </div>
            <Slider {...settings} className="slider">
                <div className="slider-card">
                    <div className="slider-image">
                        <img
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            className="furniture"
                            alt=""
                        />
                    </div>
                    <div className="slider-info">
                        <p>Lorem, ipsum.</p>
                        <p className="price">$100</p>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ color: '#fff' }}
                        >
                            {' '}
                            <ShoppingCartIcon />{' '}
                        </Button>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-image">
                        <img
                            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            className="furniture"
                            alt=""
                        />
                    </div>
                    <div className="slider-info">
                        <p>Lorem, ipsum.</p>
                        <p className="price">$100</p>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ color: '#fff' }}
                        >
                            {' '}
                            <ShoppingCartIcon />{' '}
                        </Button>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-image">
                        <img
                            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            className="furniture"
                            alt=""
                        />
                    </div>
                    <div className="slider-info">
                        <p>Lorem, ipsum.</p>
                        <p className="price">$100</p>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ color: '#fff' }}
                        >
                            <ShoppingCartIcon />{' '}
                        </Button>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-image">
                        <img
                            src="https://images.unsplash.com/photo-1517705008128-361805f42e86?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            className="furniture"
                            alt=""
                        />
                    </div>
                    <div className="slider-info">
                        <p>Lorem, ipsum.</p>
                        <p className="price">$100</p>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ color: '#fff' }}
                        >
                            {' '}
                            <ShoppingCartIcon />
                        </Button>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-image">
                        <img
                            src="https://images.unsplash.com/photo-1487015307662-6ce6210680f1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="furniture"
                        />
                    </div>
                    <div className="slider-info">
                        <p>Lorem, ipsum.</p>
                        <p className="price">$100</p>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ color: '#fff' }}
                        >
                            <ShoppingCartIcon />{' '}
                        </Button>
                    </div>
                </div>
                <div className="slider-card">
                    <div className="slider-image">
                        <img
                            src="https://images.unsplash.com/photo-1506898667547-42e22a46e125?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGZ1cm5pdHVyZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            className="furniture"
                            alt=""
                        />
                    </div>
                    <div className="slider-info">
                        <p>Lorem, ipsum.</p>
                        <p className="price">$100</p>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ color: '#fff' }}
                        >
                            {' '}
                            <ShoppingCartIcon />
                        </Button>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ShowRoom
