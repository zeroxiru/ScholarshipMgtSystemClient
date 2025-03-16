import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img_1 from '../../../src/assets/images/banner_1.png'
import img_2 from '../../../src/assets/images/banner_2.png'
import img_3 from '../../../src/assets/images/banner_3.png'
import img_4 from '../../../src/assets/images/banner_4.png'
import img_5 from '../../../src/assets/images/banner_5.png'


const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src={img_1}></img>
                {/* <p className="legend"></p> */}
            </div>
            <div>
                <img src={img_2}></img>
                {/* <p className="legend"></p> */}
            </div> 
            <div>
                <img src={img_3}></img>
                {/* <p className="legend"></p> */}
            </div> 
            <div>
                <img src={img_4}></img>
                {/* <p className="legend"></p> */}
            </div> 
            <div>
                <img src={img_5}></img>
                {/* <p className="legend"></p> */}
            </div> 
           
        </Carousel>
    );
};

export default Banner;