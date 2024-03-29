import React, { useState, useRef, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MarioVideo from "../Imagenes/Mario.mp4";

function Pelicula() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        swipeToSlide: true,
        appendDots: (dots) => (
            <div>
                <div className="first-image">{dots[0]}</div>
                <ul style={{ margin: "0px" }}> {dots.slice(1, -1)} </ul>
                <div className="last-image">{dots[dots.length - 1]}</div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const video = require("../Imagenes/LetraNitflix.png");

    return (
        <header>
            <div className="container_movie">
                <video autoPlay muted loop>
                    <source src={MarioVideo} type="video/mp4" />
                </video>
            </div>
            <div className="container_text_movie">
                <div className="container_image">
                    <img
                        src={video}
                        onClick={() => {
                            window.location.href = `./Movies/502356`;
                        }}
                    />
                </div>
                <div className="container_txt_extra">
                    <h5 className="valoracion">
                        {" "}
                        Valoracion 8 <i className="bi bi-star-fill"></i>
                    </h5>
                    <h5 className="año">2023</h5>
                    <h5 className="calidad">4K Ultra HD</h5>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, enim. Dignissimos delectus quidem non soluta? Error
                    quae laudantium iure, saepe debitis quia corporis non
                    laboriosam ab necessitatibus. Vel, numquam nobis. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Dolores
                    aspernatur dolorum aliquid esse autem sequi animi voluptas
                    unde fugit. Itaque, aliquid animi aperiam suscipit excepturi
                    autem delectus accusantium minima quis.
                </p>
            </div>

            <Slider className="container_carrusel" {...settings}>
                <img
                    src={require("../Imagenes/Frozen.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/109445`;
                    }}
                />
                <img
                    src={require("../Imagenes/Intensamente.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/150540`;
                    }}
                />
                <img
                    src={require("../Imagenes/Luca.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/508943`;
                    }}
                />
                <img
                    src={require("../Imagenes/Encanto.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/568124`;
                    }}
                />
                <img
                    src={require("../Imagenes/Coco.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/354912`;
                    }}
                />
                <img
                    src={require("../Imagenes/Ralph.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/82690`;
                    }}
                />
                <img
                    src={require("../Imagenes/Frozen.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/109445`;
                    }}
                />
                <img
                    src={require("../Imagenes/Intensamente.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/150540`;
                    }}
                />
                <img
                    src={require("../Imagenes/Luca.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/508943`;
                    }}
                />
                <img
                    src={require("../Imagenes/Encanto.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/568124`;
                    }}
                />
                <img
                    src={require("../Imagenes/Coco.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/354912`;
                    }}
                />
                <img
                    src={require("../Imagenes/Ralph.png")}
                    alt=""
                    onClick={() => {
                        window.location.href = `./Movies/82690`;
                    }}
                />
            </Slider>
        </header>
    );
}

export default Pelicula;
