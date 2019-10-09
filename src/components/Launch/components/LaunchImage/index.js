import React from 'react';
import "./styles.scss";

export class LaunchImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {//need to add derivedstatefromprops(nextProps, prevState)
            showImages: this.props.imgBool || false
        }
    }
    showImagesUpdate = () => {
        this.setState({
            showImages: !this.state.showImages
        });
    }
    render() {

        return (
            <>
                <img src={this.props.links.mission_patch}
                    alt="mission patch"
                    className="launchImg"></img>
                {this.props.links.flickr_images.length > 0 &&
                    <button className="showImagesButton"
                        onClick={this.showImagesUpdate}>
                        Show Images</button>}
                
                {this.state.showImages &&
                    <div className="flickr">
                    {this.props.links.flickr_images.map((img, index) => {
                        return <img src={img}
                            alt={"flickr " + index}
                            className="flickrImg"
                            key={"flickr " + index}></img>;
                    })}
                    </div>
                }

            </>
        );
    }
}