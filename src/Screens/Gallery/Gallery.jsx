import React from 'react'
import "./Gallery.scss"


import img1 from "../../Assets/gimg1.jpg";
import img2 from "../../Assets/gimg2.jpg";
import img3 from "../../Assets/gimg3.jpg";
import img4 from "../../Assets/gimg4.jpg";
import img5 from "../../Assets/gimg5.jpg";
import img6 from "../../Assets/gimg6.jpg";
import img7 from "../../Assets/gimg7.jpg";
import img8 from "../../Assets/gimg8.jpg";


import img9 from "../../Assets/gimg9.jpg";
import img10 from "../../Assets/gimg10.jpg";
import img11 from "../../Assets/gimg11.jpg";
import img12 from "../../Assets/gimg12.jpg";
import img13 from "../../Assets/gimg13.jpg";
import img14 from "../../Assets/gimg14.jpg";
import img15 from "../../Assets/gimg15.jpg";
import img16 from "../../Assets/gimg16.jpg";
import img17 from "../../Assets/gimg17.jpg";
import img18 from "../../Assets/gimg18.jpg";
import img19 from "../../Assets/gimg19.jpg";
import img20 from "../../Assets/gimg20.jpg";
import img21 from "../../Assets/gimg21.jpg";
import img22 from "../../Assets/gimg22.jpg";
import img23 from "../../Assets/gimg23.jpg";
import img24 from "../../Assets/gimg24.jpg";
import img25 from "../../Assets/gimg25.jpg";
import img26 from "../../Assets/gimg26.jpg";



const arr = [
    { img: img1, },
    { img: img2, },
    { img: img3, },
    { img: img4, },
    { img: img5, },
    { img: img6, },
    { img: img7, },
    { img: img8, },
]
const arr2 = [
    { img: img9, },
    { img: img10, },
    { img: img11, },
    { img: img12, },
    { img: img13, },
    { img: img14, },
    { img: img15, },
    { img: img16, },
    { img: img17, },
    { img: img18, },
    { img: img19, },
    { img: img20, },
    { img: img21, },
    { img: img22, },
]
const arr3 = [
    { img: img23, },
    { img: img24, },
    { img: img25, },
    { img: img26, },

]


const Gallery = () => {
    return (
        <div className="gallery__container">
            <div className="heading">Gallery</div>


            <div className="gallery1">
                <div className="heading__first">2017 Women’s Seminar</div>
                <div className="imgs">
                    {arr.map((data) => { return <img src={data.img} alt="" className="img1" /> })}
                </div>
            </div>
            <div className="gallery1">
                <div className="heading__first">Football Tournament</div>
                <div className="imgs">
                    {arr2.map((data) => { return <img src={data.img} alt="" className="img1" /> })}
                </div>
            </div>
            <div className="gallery1">
                <div className="heading__first">EBG Ftoor</div>
                <div className="imgs">
                    {arr3.map((data) => { return <img src={data.img} alt="" className="img1" /> })}
                </div>
            </div>


        </div>
    )
}

export default Gallery
