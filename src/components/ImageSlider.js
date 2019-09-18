import React, { Component } from 'react';

class ImageSlider extends Component {

    state = {
        images: [
            "https://images.wallpaperscraft.com/image/neon_text_sign_147796_1280x720.jpg",
            "https://images.wallpaperscraft.com/image/hourglass_stones_blur_120797_1280x720.jpg",
            "https://images.wallpaperscraft.com/image/moon_tree_starry_sky_132139_1280x720.jpg",
            "https://images.wallpaperscraft.com/image/blueberries_berries_glass_147784_1280x720.jpg"
        ],
        idx: 0
    }

    handleNext = () => {
        this.setState({
            idx: this.state.idx + 1,
        })
    }

    handlePrev = () => {
        this.setState({
            idx: this.state.idx - 1,
        })
    }

    render() {
        return (
            <div>
                <img
                    style={{ width:"100%", height:"100%" }} 
                    src={this.state.images[this.state.idx]} alt="" />
                <button onClick={this.handlePrev} >Prev</button>
                <button onClick={this.handleNext} >Next</button>
            </div>
        );
    }
}

export default ImageSlider;