import React, { Component } from "react";
import { isMobile } from 'react-device-detect';
import tire from '../Assets/tire.gif'
import time from '../Assets/time.png'
import phone from '../Assets/phone.png'
import map from '../Assets/map.png'
import address from '../Assets/address.png'
import email from '../Assets/email.png'

export default class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapWidth: 500,
            mapHeight: 400
        }
        if (isMobile) {
            this.state.mapWidth = this.props.screenWidth - 60;
            this.state.mapHeight = this.props.screenHeight / 2;
        }
    }

    componentDidMount() {
        document.title = "Контакты - Шиномонтаж MASTER ШиН"
    }

    render() {
        const {
            mapWidth,
            mapHeight,
        } = this.state
        return (
            <div className="container px-3 py-2">
                <div className="d-flex row border rounded border-dark bg-light bg-gradient px-3 py-3">
                    <section className="col-auto">
                        <h2 className="text-center"><img src={map} alt="map" /> Мы на карте</h2>
                        <div className="text-center" style={{ position:"relative", overflow:"hidden" }}>
                            <a href="https://yandex.by/maps/org/master_shin/91289259818/?utm_medium=mapframe&utm_source=maps" 
                                style={{ color:"#eee", fontSize:"12px", position:"absolute", top:"0px" }}>Мастер Шин</a>
                            <a href="https://yandex.by/maps/155/gomel/category/tire_service/184105260/?utm_medium=mapframe&utm_source=maps" 
                                style={{ color:"#eee", fontSize:"12px", position:"absolute", top:"14px" }}>Шиномонтаж в Гомеле</a>
                            <a href="https://yandex.by/maps/155/gomel/category/car_service_auto_repair/184105246/?utm_medium=mapframe&utm_source=maps" 
                                style={{ color:"#eee", fontSize:"12px", position:"absolute", top:"28px" }}>Автосервис, автотехцентр в Гомеле</a>
                            <iframe title="map" src="https://yandex.by/map-widget/v1/?ll=30.977269%2C52.467412&mode=search&oid=91289259818&ol=biz&sctx=ZAAAAAgBEAAaKAoSCVirdk1Iy0JAETM334ju3UtAEhIJk4rG2t85A0ARc2a7Qh%2Bs6z8iBgABAgMEBSgKOABAoaUNSAFqAnVhnQHNzEw9oAEAqAEAvQEn7Q9bwgEGqp6OitQCggIS0LzQsNGB0YLQtdGA0YjQuNC9igIAkgIAmgIMZGVza3RvcC1tYXBz&sll=30.977269%2C52.467412&source=serp_navig&sspn=0.025648%2C0.009989&text=%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%88%D0%B8%D0%BD&z=15.55" 
                                width={mapWidth} height={mapHeight} allowFullScreen={true} style={{ position:"relative" }}></iframe>
                        </div>
                        <p className="fs-3 pt-3 text-center"><img src={address} alt="address" /> ул. Героев Подпольщиков, 20А</p>
                    </section>
                    <section className="col-auto flex-grow-1">
                        <article>
                            <h2 className="fs-1 text-center">
                                <img src={tire} alt="tire" /> 
                                Наши контакты 
                                <img src={tire} alt="tire" />
                            </h2>
                            <p className="text-center fs-3">Геннадий: <a href="tel:+375 (29) 364-19-78" ><img src={phone} alt="phone" />+375(29)364-19-78</a></p>
                            <p className="text-center fs-3">Александр: <a href="tel:+375 (29) 658-32-01" ><img src={phone} alt="phone" />+375(29)658-32-01</a></p>
                            <p className="text-center fs-3">Наша почта: <a href="mailto:rebikov71@bk.ru"><img src={email} alt="email" /> rebikov71@bk.ru</a></p>
                        </article>
                        <article>
                            <h2 className="text-center fs-1">
                                <img className="col-auto" src={tire} alt="tire" /> 
                                Время работы 
                                <img className="col-auto" src={tire} alt="tire" />
                            </h2>
                            <p className="fs-3 text-center"><img src={time} alt="time" /> 7 дней в неделю с 8:00 до 20:00</p>
                        </article>
                    </section>
                </div>
            </div>
        )
    }
}