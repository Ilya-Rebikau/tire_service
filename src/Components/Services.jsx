import React, { Component } from "react";
import car from '../Assets/car.png'
import jeep from '../Assets/jeep.png'
import truck from '../Assets/truck.png'
import gazelle from '../Assets/gazelle.png'
import tire from '../Assets/tire.gif'

export default class Services extends Component {
    componentDidMount() {
        document.title = "Услуги - Шиномонтаж MASTER ШиН"
    }
    render() {
        return (
            <div className="container">
                <h2 className="text-center"><img src={tire} alt="tire" /> Наши услуги <img src={tire} alt="tire" /></h2>
                <div className="d-flex flex-column justify-content-center">
                    <div className="table-responsive">
                        <h4>В стоимость за одно колесо входит: снятие и установка колеса; монтаж-демонтаж; балансировка; чистка диска от грязи;
                            чистка диска на посадочном месте от коррозии; промазка диска пастой; промазка шины пастой.
                        </h4>
                        <table className="table text-center align-middle table-bordered table-hover">
                            <thead className="bg-success align-middle">
                                <tr className="text-white">
                                    <th>Условие</th>
                                    <th>Радиус колеса</th>
                                    <th>Цена, бел. руб</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle" rowSpan={2}>Железные диски<br /><img src={car} alt="car" /></td>
                                    <td>R 13-14</td>
                                    <td>14 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 15-16</td>
                                    <td className="align-middle">14 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td className="align-middle" rowSpan={7}>Литые диски<br /><img src={car} alt="car" /></td>
                                    <td>R 13-14</td>
                                    <td>15 руб. 50 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 15</td>
                                    <td>15 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 16</td>
                                    <td>16 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 17</td>
                                    <td>17 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 18</td>
                                    <td>18 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 19-20</td>
                                    <td>19 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 21-24</td>
                                    <td>20 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td className="align-middle" rowSpan={4}>Джипы<br /><img src={jeep} alt="jeep" /></td>
                                    <td>R 15</td>
                                    <td>17 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 16-17</td>
                                    <td>18 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 18-20</td>
                                    <td>22 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 21-24</td>
                                    <td>25 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td className="align-middle" rowSpan={4}>Диски без центрального отверстия</td>
                                    <td>R 13-14</td>
                                    <td>19 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 15-16</td>
                                    <td>20 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 17</td>
                                    <td>20 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 18</td>
                                    <td>21 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td className="align-middle" rowSpan={4}>Микроавтобусы<br /><img src={truck} alt="truck" /></td>
                                    <td>R 14-15</td>
                                    <td>18 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 14-15 (с шайбой)</td>
                                    <td>19 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 16</td>
                                    <td>20 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>R 16 (Газель-Ивеко)</td>
                                    <td>20 руб. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td className="align-middle" rowSpan={2}>Раскатка дисков</td>
                                    <td>Железные диски</td>
                                    <td>От 25р. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>Литые диски</td>
                                    <td>От 35р. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td>Сварка аргоном</td>
                                    <td colSpan={2}>От 35р. 0 коп.</td>
                                </tr>
                                <tr>
                                    <td className="align-middle" rowSpan={2}>Вентили</td>
                                    <td>Резиновый</td>
                                    <td>2 руб. 50 коп.</td>
                                </tr>
                                <tr>
                                    <td>Хромированный</td>
                                    <td>3 руб. 50 коп.</td>
                                </tr>
                                <tr>
                                    <td className="align-middle">Прочее</td>
                                    <td>Пакет</td>
                                    <td>1 руб. 50 коп.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}