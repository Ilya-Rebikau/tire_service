import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-sm navbar-dark bg-black border-bottom box-shadow mb-3 pb-3 pt-3">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand ps-4">Главная</Link>
                        <button className="navbar-toggler me-2" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-4" id="navbarNav">
                            <ul className="navbar-nav flex-grow-1">
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link text-white">Услуги</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link text-white">О нас</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contacts" className="nav-link text-white">Контакты</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/feedback" className="nav-link text-white">Отзывы</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav d-flex justify-content-end px-1">
                                <li className="nav-item text-center text-white">
                                    Без выходных с 8:00 до 20:00<br />
                                    +375 (29) 364-19-78
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}