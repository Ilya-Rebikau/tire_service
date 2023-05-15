import React, { Component } from "react";
import { YMaps, Map, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
import {isMobile} from 'react-device-detect';
import tire from '../Assets/tire.gif'
import time from '../Assets/time.png'
import phone from '../Assets/phone.png'
import map from '../Assets/map.png'
import address from '../Assets/address.png'
import email from '../Assets/email.png'

export default class Contacts extends Component {
    constructor(props){
        super(props);
        this.state = {
            mapWidth:500,
            mapHeight:400
        }
        if (isMobile){
            this.state.mapWidth = 300;
            this.state.mapHeight = 250;
        }
    }

    render() {
        const {
            mapWidth,
            mapHeight,
        }=this.state
        return (
            <div className="container px-3 py-2">
                <div className="d-flex row border rounded border-dark bg-light bg-gradient px-3 py-3">
                    <div className="col-auto me-5">
                        <p className="fs-1 text-center fw-weight-bolder"><img src={map} alt="map" /> Мы на карте</p>
                        <YMaps>
                            <Map
                                defaultState={{
                                    center: [52.468429, 30.973884],
                                    zoom: 17
                                }}
                                width={mapWidth}
                                height={mapHeight}
                            >
                                <Placemark
                                    geometry={[52.468429, 30.973884]}
                                />
                                <GeolocationControl options={{ float: "left" }} />
                                <TrafficControl options={{ float: "right" }} />
                                <ZoomControl options={{ float: "right" }} />
                                <FullscreenControl />
                            </Map>
                        </YMaps>
                        <p className="fs-3 pt-3 text-center"><img src={address} alt="address" /> ул. Героев Подпольщиков, 20А</p>
                    </div>
                    <div className="col-auto flex-grow-1">
                        <p className="fs-1 text-center">Наши контакты</p>
                        <p className="fs-3">Геннадий: <a href="tel:+375 (29) 364-19-78" ><img src={phone} alt="phone" />+375(29)364-19-78</a>, <a href="mailto:rebikov71@bk.ru"><img src={email} alt="email" /> rebikov71@bk.ru</a></p>
                        <p className="fs-3">Александр: <a href="tel:+375 (29) 658-32-01" ><img src={phone} alt="phone" />+375(29)658-32-01</a></p>
                        <div className="row d-flex justify-content-center">
                            <img className="col-auto" src={tire} alt="tire" />
                            <img className="col-auto" src={tire} alt="tire" />
                            <img className="col-auto" src={tire} alt="tire" />
                            <img className="col-auto" src={tire} alt="tire" />
                        </div>
                        <p className="text-center fs-1">Время работы</p>
                        <p className="fs-3"><img src={time} alt="time" /> 7 дней в неделю с 8:00 до 20:00</p>
                    </div>
                </div>
            </div>
        )
    }
}