import React, { Component } from "react";
import tire from '../Assets/tire.gif'
import phone from '../Assets/phone.png'

export default class Services extends Component {
    componentDidMount() {
        document.title = "Автокондиционеры"
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center"><img src={tire} alt="tire" /> Автокондиционеры <img src={tire} alt="tire" /></h2>
                <div className="d-flex flex-column justify-content-center">
                    <h2 className="text-center">Обращаться по телефону 
                        <a href="tel:+375 (29) 658-32-01" ><img src={phone} alt="phone" />+375(44)734-17-84</a> - Валентин</h2>
                    <div className="table-responsive">
                        <table className="table text-center align-middle table-bordered table-hover">
                            <thead className="bg-success align-middle">
                                <tr className="text-white">
                                    <th>Климатконтроль</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle">Диагностика</td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Обслуживание и заправка</td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Ремонт электрики и электроники</td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Пайка трубок, радиаторов</td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Замена подшипников в компрессорах</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}