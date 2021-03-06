import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./PostDetail.css";

class PostDetail extends Component {
    render() {
        return(
            <div className="post-detail">
                <Carousel>
                    <div>
                        <img src="http://react-responsive-carousel.js.org/assets/1.jpeg" />
                        <p className="legend">Anh 1</p>
                    </div>
                    <div>
                        <img src="http://react-responsive-carousel.js.org/assets/2.jpeg" />
                        <p className="legend">anh 2</p>
                    </div>
                    <div>
                        <img src="http://react-responsive-carousel.js.org/assets/3.jpeg" />
                        <p className="legend">anh 3</p>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default PostDetail;