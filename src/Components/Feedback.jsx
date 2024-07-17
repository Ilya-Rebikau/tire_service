import React, { Component } from "react";
import { isMobile } from 'react-device-detect';

export default class Feedback extends Component {
    constructor(props) {
        super(props);
        this.state = {
            yandexHeight: 750
        }
        if (isMobile) {
            this.state.yandexHeight = this.props.screenHeight;
        }
    }

    componentDidMount() {
        document.title = "Отзывы - Шиномонтаж MASTER ШиН"
    }

    render() {
        const {
            yandexHeight,
        } = this.state
        return (
            <div className="container">
                <h2 className="text-center">Отзывы о нашем шиномонтаже Мастер Шин</h2>
                <section className="d-flex justify-content-center row">
                    <article className="text-center col-sm-7 border rounded border-dark bg-light bg-gradient m-3 p-3">
                        <div style={{ width:"100%", height:yandexHeight, overflow:"hidden", position:"relative" }}>
                            <iframe title="feedback" style={{ width:"100%", height:"100%", border:"1px solid #e6e6e6", borderRadius:"8px", boxSizing:"border-box" }} src="https://yandex.ru/maps-reviews-widget/91289259818?comments"></iframe>
                        </div>
                    </article>
                </section>
            </div>
        )
    }
}