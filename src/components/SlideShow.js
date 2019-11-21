import React, { Component } from 'react';


class SlideShow extends Component {
    constructor() {
        super();

        this.state = {
            slideShow: false,
            images: [
                { id: 1, image: './images/toronto.jpeg' },
                { id: 2, image: './images/beach.jpeg' },
                { id: 3, image: './images/fall.jpeg' },
            ]
        }

        render() {
            const images = this.slideShow();
            var shuffle = setInterval(slideShow(), 5000);
        }



        _slideShow() {

            var pics = document.querySelector("main .picShuffle");
            let imageList = ['./images/toronto.jpeg', './images/beach.jpeg', './images/fall.jpeg'];

            var i = 0;

            pics.setAttribute("src", imageList[i]);
            i++;

            if (i >= imageList.length)
                i = 0;

        }
    }
}

export default SlideShow;
