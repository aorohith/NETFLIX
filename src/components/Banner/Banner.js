import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="discription">Lorem Ipsum is simply dummy text of the printing and typesetting survived not only five centuries</h1>
            </div>
            <div className="fade-bottom"></div>
        </div>
    )
}

export default Banner
