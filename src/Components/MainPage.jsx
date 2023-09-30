import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import service1 from '../Assets/service1.jpg'
import service2 from '../Assets/service2.jpg'

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
                            <img className="d-block w-100" src={service1} alt="First slide" />
                            <Carousel.Caption>
                                <h3 className="text-white">Будем рады встретить Вас в лучшем шиномонтаже Гомеля!</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={service2} alt="Second slide" />
                        </Carousel.Item>
                    </Carousel>
                </section>
            </div>
        )
    }
}