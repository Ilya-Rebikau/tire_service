import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <div className="text-center fs-1">
                <p>Страница по заданному адресу не найдена!</p>
                <Link to="/" className="btn btn-dark shadow-none fs-3">На главную</Link>
            </div>
        )
    }
}