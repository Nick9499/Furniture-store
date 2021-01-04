import { Button } from '@material-ui/core'
import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_body">
                <h1>
                    Design Your
                    <br /> Comfort Zone
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    <br /> elit. Laborum rem amet, asperiores molestias a<br />{' '}
                    commodi iusto recusandae quo voluptatum
                    <br /> inventore nisi.
                </p>
                <Button
                    style={{
                        marginTop: '7%',
                        background: '#009688',
                        color: '#fff',
                        paddingLeft: '8%',
                        paddingRight: '8%',
                    }}
                >
                    SHOP NOW
                </Button>
            </div>
            <div className="hero_img">
                <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Hero
