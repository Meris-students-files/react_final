import images from "./images";
import './slider.css'
import { useState } from "react";
import Icon from "./Icon";

export default function Slider() {
    const [curentindex, setcurentindex] = useState(0);

    function Nextslider() {
        setcurentindex((curentindex) => curentindex === images.length - 1 ? 0 : curentindex + 1)
    }
    function Prevslider() {
        setcurentindex((curentindex) => curentindex === 0 ? images.length - 1 : curentindex - 1)
    }
    return (
        <div className="slider">
            {images.map((item, index) => {
                return (
                    <div style={{ transform: `translateX(-${curentindex * 100}%)` }} className="slid" key={index}>
                        <img alt="" src={item}></img>
                    </div>
                )
            })}
            <Icon Prevslider={Prevslider} Nextslider={Nextslider} />
        </div>
    )
}