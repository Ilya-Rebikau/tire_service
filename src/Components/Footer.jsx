import React, { Component } from "react";
import '../main.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-light fixed-bottom py-2 footer border-top text-muted">
                <div className="text-center">
                    &copy; 2023 - Автосервис
                </div>
            </footer>
        )
    }
}