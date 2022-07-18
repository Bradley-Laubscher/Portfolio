import React from "react";

const preloadImageWithPromise = src => {
    return new Promise((resolve, reject) => {
        const image = new Image();

        const timeout = setTimeout(() => {
            image.onload = null;
            reject({ error: `Was not able to load ${src} within 20 seconds`});
        }, 20000);

        image.onload = () => {
            clearTimeout(timeout);
            resolve();
        };

        image.src = src;
    });
};

export default class BlurImage extends React.Component {
    state = {
        loaded: false
    };

    componentDidMount() {
        this.loadImage();
    };

    loadImage = async () => {
        try {
            await preloadImageWithPromise(this.props.src);
            this.setState({ loaded: true });
        } catch(error) {
            console.error(error);
        }
    };

    render() {
        const { src, base64, alt } = this.props;
        const { loaded } = this.state;
        const currentSrc = loaded ? src : base64;
        
        return <img {...this.props} src={currentSrc} alt={alt} />

    }
}