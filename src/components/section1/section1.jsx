import React from 'react';
import "./section1.css";
import pic1 from "../../asset/app.jpg";
import pic2 from "../../asset/img7.jpg";
import pic3 from "../../asset/img1.jpg";
import pic4 from "../../asset/img6.jpg";
import pic5 from "../../asset/img2.jpg";
import pic6 from "../../asset/img5.jpg";
import pic7 from "../../asset/img3.jpg";
import pic8 from "../../asset/img4.jpg";

const Section1 = () => {
    return (
        <div className='section1'>
            <div className="sectionImg">
                <img src={pic1} alt="" className="imgItems" />
                <img src={pic2} alt="" className="imgItems" />
                <img src={pic3} alt="" className="imgItems" />
                <img src={pic4} alt="" className="imgItems" />
                <img src={pic5} alt="" className="imgItems" />
                <img src={pic6} alt="" className="imgItems" />
                <img src={pic7} alt="" className="imgItems" />
                <img src={pic8} alt="" className="imgItems" />
            </div>
        </div>
    );
}

export default Section1;
