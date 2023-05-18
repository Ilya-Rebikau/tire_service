import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { isMobile } from 'react-device-detect';
import tire from '../Assets/tire.gif'
import i1_horizontal from '../Assets/1_horizontal.jpg'
import i2_horizontal from '../Assets/2_horizontal.jpg'
import i1_vertical from '../Assets/1_vertical.jpg'
import i2_vertical from '../Assets/2_vertical.jpg'

export default class AboutUs extends Component {
    componentDidMount() {
        document.title = "О нас - Шиномонтаж MASTER ШиН"
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column">
                    <section>
                        <p className="fs-1 text-center"><img src={tire} alt="tire" /> Наши сотрудники <img src={tire} alt="tire" /></p>
                        <article>
                            <p className="fs-4 text-center">Два брата, два профессионала своего дела, однажды решили заняться собственным
                                бизнесом и зарегистрировали ИП: так и возник наш шиномонтаж MASTER ШиН. Братья создали 2 команды, каждую из которых возглавил
                                один из них. Теперь каждая из команд готова встретить и обслужить вас! Они  с лёгкостью определят
                                проблему и обслужат ваше авто наилучшим образом, а также дадут гарантии своей работы!
                            </p>
                        </article>
                        <article className="d-flex justify-content-center row">
                            <div className="text-center col-sm-5 border rounded border-dark bg-light bg-gradient m-3 p-3">
                                <p className="fs-3">Ребиков Александр Евгеньевич</p>
                                <img className="img-thumbnail img-fluid" src={i1_vertical} alt="Ребиков Александр Евгеньевич"></img>
                                <p className="pt-2 fs-5">Индивидуальный предприниматель и владелец.
                                    Профессионал своего дела со стажем более 30 лет.</p>
                            </div>
                            <div className="text-center col-sm-5 border rounded border-dark bg-light bg-gradient m-3 p-3">
                                <p className="fs-3">Ребиков Геннадий Евгеньевич</p>
                                <img className="img-thumbnail img-fluid" src={i2_vertical} alt="Ребиков Геннадий Евгеньевич"></img>
                                <p className="pt-2 fs-5">Совладелец. Профессионал своего дела со стажем более 30 лет.</p>
                            </div>
                        </article>
                    </section>
                    <section className="pt-3">
                        <p className="fs-1 text-center"><img src={tire} alt="tire" /> Оборудование <img src={tire} alt="tire" /></p>
                        <article>
                            <p className="fs-4 text-center">
                                Мы используем только современное и проверенное оборудование, необходимое для качественного
                                выполнения всех услуг по обслуживанию вашего авто.
                            </p>
                        </article>
                        <article className="d-flex justify-content-center">
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
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}