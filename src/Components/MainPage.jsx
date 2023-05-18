import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { isMobile } from 'react-device-detect';
import i1_horizontal from '../Assets/1_horizontal.jpg'
import i2_horizontal from '../Assets/2_horizontal.jpg'
import i1_vertical from '../Assets/1_vertical.jpg'
import i2_vertical from '../Assets/2_vertical.jpg'

export default class MainPage extends Component {
    componentDidMount() {
        document.title = "Главная - Шиномонтаж MASTER ШиН"
    }
    render() {
        return (
            <div style={{ width: '100%' }}>
                <h1 className="text-center">Шиномонтаж MASTER ШиН</h1>
                <section>
                    <Carousel fade interval={15000} variant="dark">
                        <Carousel.Item>
                            {isMobile ?
                                <img className="d-block w-100" src={i1_vertical} alt="First slide" /> :
                                <img className="d-block w-100" src={i1_horizontal} alt="First slide" />}
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            {isMobile ?
                                <img className="d-block w-100" src={i2_vertical} alt="Second slide" /> :
                                <img className="d-block w-100" src={i2_horizontal} alt="Second slide" />}
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
            </div>
        )
    }
}