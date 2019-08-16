import React from "react";
import "./Gallery.scss";
import "./green-audio-player.scss";
import headless from "./Images/headless.png";
import abstract from "./Images/abstract.png";
import blockworld from "./Images/blockworld.png";
import landscape from "./Images/landscape.png";
import rocket from "./Images/rocket.png";
import cog from "./Images/cog.png";
import song1 from "./Audio/Mufaya_Dark_Ascenscion.wav";
import song2 from "./Audio/James_Background_Music.mp3";
import song3 from "./Audio/Jon_The_Beginning.wav";
import {NavLink} from "react-router-dom";
import YouTube from "react-youtube";
import GreenAudioPlayer from "green-audio-player";

class Gallery extends React.Component {

    componentDidMount() {
        GreenAudioPlayer.init({
            selector: ".player",
            stopOthersOnPlay: true
        });
    }

    render() {
        return (
            <html>
            <NavLink to={""} onClick={this.Delay} className={"circCont"}>
                <button className="circle" data-animation="showShadow" data-remove="3000"/>
            </NavLink>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet"/>
                <title>Gallery</title>
            </head>
            <div className="gallery-container">
                <h1 className={"gallery-header"}>GALLERY</h1>
                <div className="gallery">
                    <div className="gallery-item">
                        <h5 className={"credits"}>Work by Deveon</h5>
                        <img className="gallery-image"
                             src={abstract}
                             alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer"/>
                    </div>

                    <div className="gallery-item">
                        <h5 className={"credits"}>Work by Deveon</h5>
                        <img className="gallery-image"
                             src={headless}
                             alt="sunset behind San Francisco city skyline"/>
                    </div>

                    <div className="gallery-item">
                        <h5 className={"credits"}>Work by Deveon</h5>
                        <img className="gallery-image"
                             src={cog}
                             alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"/>
                    </div>

                    <div className="gallery-item">
                        <h5 className={"credits"}>Work by Deveon</h5>
                        <img className="gallery-image"
                             src={blockworld}
                             alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night"/>
                    </div>

                    <div className="gallery-item">
                        <h5 className={"credits"}>Work by Mufaya</h5>
                        <img className="gallery-image"
                             src={landscape}
                             alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA"/>
                    </div>

                    <div className="gallery-item">
                        <h5 className={"credits"}>Work by Mufaya</h5>
                        <img className="gallery-image"
                             src={rocket}
                             alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp"/>
                    </div>
                </div>
            </div>

            <hr className={"gallery-hr"}/>
            <br/>

            <div className={"gallery-container"}>
                <div className={"gallery"}>
                    <div className="gallery-item">
                        <YouTube videoId={"NJYJgD9113E"} onReady={this._onReady} containerClassName={"gallery-video"}/>
                    </div>
                    {/*
                        NJYJgD9113E
                        */}
                    <div className="gallery-item">
                        <YouTube videoId={"T08YwAIozoY"} onReady={this._onReady} containerClassName={"gallery-video"}/>
                    </div>

                    <div className="gallery-item">
                        <YouTube videoId={"xiFN94hElzs"} onReady={this._onReady} containerClassName={"gallery-video"}/>
                    </div>
                </div>
            </div>

            <hr className={"gallery-hr"}/>
            <br/>
            <br/>
            <br/>

            <div className={"gallery-container"}>
                <div className={"gallery"}>
                    <div className={"gallery-audio"}>
                        <div className={"player audio-player"}>
                            <h5 className={"music-credits"}>Dark Ascension - Mufaya</h5>
                            <audio crossorigin>
                                <source src={song1} type={"audio/wav"}/>
                            </audio>
                        </div>

                        <div className={"player audio-player"}>
                            <h5 className={"music-credits"}>Background Music - James</h5>
                            <audio crossOrigin>
                                <source src={song2} type={"audio/mpeg"}/>
                            </audio>
                        </div>

                        <div className={"player audio-player"}>
                            <h5 className={"music-credits"}>The Beginning - Jon</h5>
                            <audio crossOrigin>
                                <source src={song3} type={"audio/mpeg"}/>
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
            </html>
        )
    }

    _onReady(evt) {
        evt.target.pauseVideo();
    }

}

export default Gallery;