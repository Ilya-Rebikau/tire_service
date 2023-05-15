import React, { Component } from "react";
import car from '../Assets/car.png'
import jeep from '../Assets/jeep.png'
import truck from '../Assets/truck.png'
import gazelle from '../Assets/gazelle.png'
import tire from '../Assets/tire.gif'

export default class Services extends Component {
    render() {
        return (
            <div className="container">
                <p className="fs-1 text-center"><img className="col-auto" src={tire} alt="tire" /> Наши услуги <img className="col-auto" src={tire} alt="tire" /></p>
                <div className="d-flex flex-column justify-content-center">
                    <p className="fs-2 text-center">Пакет услуг - шиномонтаж (немного дешевле чем по отдельности)</p>
                    <div className="table-responsive">
                    <table className="table text-center align-middle table-bordered table-hover">
                                <thead className="bg-primary align-middle">
                                    <tr className="text-white">
                                        <th>Условие</th>
                                        <th>Радиус колеса</th>
                                        <th>Цена, бел. руб</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle" rowSpan={2}>Железные диски</td>
                                        <td>R 13-14</td>
                                        <td>12 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 15-16</td>
                                        <td className="align-middle">12 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" rowSpan={7}>Литые диски</td>
                                        <td>R 13-14</td>
                                        <td>12 руб. 50 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 15</td>
                                        <td>13 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 16</td>
                                        <td>13 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 17</td>
                                        <td>14 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 18</td>
                                        <td>16 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 19-20</td>
                                        <td>17 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 21-24</td>
                                        <td>18 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" rowSpan={4}>Джипы<br /><img src={jeep} alt="jeep" /></td>
                                        <td>R 15</td>
                                        <td>15 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 16-17</td>
                                        <td>16 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 18-20</td>
                                        <td>18 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 21-24</td>
                                        <td>19 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" rowSpan={4}>Диски без центрального отверстия</td>
                                        <td>R 13-14</td>
                                        <td>16 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 15-16</td>
                                        <td>17 руб. 0 коп.</td>
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
                                        <td className="align-middle" rowSpan={4}>Микроавтобусы<br /><img src={truck} alt="truck" /></td>
                                        <td>R 14-15</td>
                                        <td>14 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 14-15 (с шайбой)</td>
                                        <td>15 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 16</td>
                                        <td>16 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 16 (Газель-Ивеко)</td>
                                        <td>17 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" rowSpan={2}>Вентили</td>
                                        <td>Резиновый</td>
                                        <td>2 руб. 50 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Хромированный</td>
                                        <td>3 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" rowSpan={4}>Колышки Remastem</td>
                                        <td>D = 6 мм</td>
                                        <td>5 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>D = 8 мм</td>
                                        <td>5 руб. 50 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>D = 10 мм</td>
                                        <td>7 руб. 50 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>D = 12 мм</td>
                                        <td>8 руб. 0 коп.</td>
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
                <div className="row">
                    <p className="fs-2 text-center">Услуги по отдельности</p>
                    <div className="col-sm-6 d-flex flex-column">
                        <p className="fs-3 text-center">Шиномонтаж разборка-сборка</p>
                        <div className="table-responsive">
                            <table className="table text-center align-middle table-bordered table-hover">
                                <thead className="bg-primary align-middle">
                                    <tr className="text-white">
                                        <th>Тип авто</th>
                                        <th>Радиус колеса</th>
                                        <th>Стоимость услуг, бел. руб</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle" rowSpan={3}>Легковой<br /><img src={car} alt="car" /></td>
                                        <td>R 13-16</td>
                                        <td>5 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Низкопрофильные:<br />Профиль менее 50% R 15-16</td>
                                        <td className="align-middle">6 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 17-20</td>
                                        <td>6 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" rowSpan={2}>Джип<br /><img src={jeep} alt="jeep" /></td>
                                        <td>R 15-17</td>
                                        <td>7 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 18-20</td>
                                        <td>8 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle" rowSpan={2}>Бус/Газель<br /><img src={truck} alt="truck" /><img src={gazelle} alt="gazelle" /></td>
                                        <td>R 14-15</td>
                                        <td>7 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 16</td>
                                        <td>8 руб. 0 коп.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="fs-3 text-center">Ремонт</p>
                        <div className="table-responsive">
                            <table className="table text-center align-middle table-bordered table-hover">
                                <thead className="bg-primary align-middle">
                                    <tr className="text-white">
                                        <th>Ремонт</th>
                                        <th>Стоимость услуг, бел. руб</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Камеры</td>
                                        <td>5 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Бескамерной шины</td>
                                        <td>5 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Проверка дисков на биение</td>
                                        <td>1 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Чистка диска от грязи</td>
                                        <td>1 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Чистка диска на посадочном месте от глубокой коррозии</td>
                                        <td>3 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Промазка диска пастой</td>
                                        <td>1 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Вулканизация л/а шины 1 см</td>
                                        <td>20 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Упаковка колёс в пакет 1 шт</td>
                                        <td>1 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Сварка аргоном</td>
                                        <td>От 25 руб. 0 коп.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="fs-3 text-center">Раскатка дисков</p>
                        <div className="table-responsive">
                            <table className="table text-center align-middle table-bordered table-hover">
                                <thead className="bg-primary align-middle">
                                    <tr className="text-white">
                                        <th>Тип авто и диска</th>
                                        <th>Стоимость услуг, бел. руб</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Легковой автомобиль<br />Железный диск<br /><img src={car} alt="car" /></td>
                                        <td className="align-middle">От 20 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Бус<br /> Железный диск<br /><img src={truck} alt="truck" /></td>
                                        <td className="align-middle">От 25 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Литьё</td>
                                        <td className="align-middle">От 30 руб. 0 коп.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-6 d-flex flex-column">
                        <p className="fs-3 text-center">Балансировка</p>
                        <div className="table-responsive">
                            <table className="table text-center align-middle table-bordered table-hover">
                                <thead className="bg-primary align-middle">
                                    <tr className="text-white">
                                        <th>Размер колеса и/или тип авто</th>
                                        <th>Диск</th>
                                        <th>Стоимость услуг, бел. руб</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>R 13-16</td>
                                        <td className="align-middle" rowSpan={3}>Железный</td>
                                        <td>5 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Бус<br /><br /><img src={truck} alt="truck" /></td>
                                        <td className="align-middle">7 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Бус R 16 Отверстие спарки<br /><img src={truck} alt="truck" /></td>
                                        <td className="align-middle">8 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 13-16</td>
                                        <td className="align-middle" rowSpan={3}>Литьё</td>
                                        <td>6 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>R 17-20</td>
                                        <td>7 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Джип/Бус<br /><img src={jeep} alt="jeep" /><img src={truck} alt="truck" /></td>
                                        <td className="align-middle">8 руб. 0 коп.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="fs-3 text-center">Снятие/установка колёс с ремонтом</p>
                        <div className="table-responsive">
                            <table className="table text-center align-middle table-bordered table-hover">
                                <thead className="bg-primary align-middle">
                                    <tr className="text-white">
                                        <th>Услуга</th>
                                        <th>Стоимость услуг, бел. руб</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Снятие/установка<br />Легковой автомобиль<br /><img src={car} alt="car" /></td>
                                        <td className="align-middle">3 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Снятие установка<br />Бус/Джип<br /><img src={truck} alt="truck" /><img src={jeep} alt="jeep" /></td>
                                        <td className="align-middle">4 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Газель спарка<br /><img src={gazelle} alt="gazelle" /></td>
                                        <td>7 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Газель передние<br /><img src={gazelle} alt="gazelle" /></td>
                                        <td>5 руб. 0 коп.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="fs-3 text-center">Вентили</p>
                        <div className="table-responsive">
                            <table className="table text-center align-middle table-bordered table-hover">
                                <thead className="bg-primary align-middle">
                                    <tr className="text-white">
                                        <th>Название вентиля</th>
                                        <th>Стоимость услуг, бел. руб</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Резиновый TR</td>
                                        <td>3 руб. 0 коп.</td>
                                    </tr>
                                    <tr>
                                        <td>Декоративный хромированный</td>
                                        <td>4 руб. 0 коп.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}