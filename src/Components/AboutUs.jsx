import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import tire from '../Assets/tire.gif'
import removal_machine_1 from '../Assets/removal_machine_1.jpg'
import removal_machine_2 from '../Assets/removal_machine_2.jpg'
import balancing_machine from '../Assets/balancing_machine.jpg'
import rolling_machine from '../Assets/rolling_machine.jpg'
import gena_vertical from '../Assets/gena_vertical.jpg'
import i1_vertical from '../Assets/1_vertical.jpg'

export default class AboutUs extends Component {
    componentDidMount() {
        document.title = "О нас - Шиномонтаж MASTER ШиН"
    }

    render() {
        return (
            <div className="container">
                <div className="d-flex flex-column">
                    <section>
                        <h2 className="fs-1 text-center"><img src={tire} alt="tire" /> Наши сотрудники <img src={tire} alt="tire" /></h2>
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
                                <img className="img-thumbnail img-fluid" src={gena_vertical} alt="Ребиков Геннадий Евгеньевич"></img>
                                <p className="pt-2 fs-5">Совладелец. Профессионал своего дела со стажем более 30 лет.</p>
                            </div>
                        </article>
                    </section>
                    <section className="pt-3">
                        <h2 className="fs-1 text-center"><img src={tire} alt="tire" /> Оборудование <img src={tire} alt="tire" /></h2>
                        <article>
                            <p className="fs-4 text-center">
                                Мы используем только современное и проверенное оборудование, необходимое для качественного
                                выполнения всех услуг по обслуживанию вашего авто.
                            </p>
                        </article>
                        <article className="d-flex justify-content-center">
                            <Carousel fade interval={15000} variant="dark">
                                <Carousel.Item>
                                    <img className="d-block w-100" src={balancing_machine} style={{ height: 600 }} alt="First slide" />
                                    <Carousel.Caption>
                                        <h3 className="text-white">Балансировка</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={rolling_machine} style={{ height: 600 }} alt="Second slide" />
                                    <Carousel.Caption>
                                        <h3 className="text-white">Раскатка дисков</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={removal_machine_1} style={{ height: 600 }} alt="Third slide" />
                                    <Carousel.Caption>
                                        <h3 className="text-white">Шиномонтаж</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={removal_machine_2} style={{ height: 600 }} alt="Forth slide" />
                                    <Carousel.Caption>
                                        <h3 className="text-white">Шиномонтаж</h3>
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