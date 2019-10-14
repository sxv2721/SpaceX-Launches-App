import React from 'react';
import "./styles.scss";

export class LaunchImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowingImages: this.props.isShowingImages || false
        }
    }
    isShowingImagesUpdate = () => {
        this.setState({
            isShowingImages: !this.state.isShowingImages
        });
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.isShowingImages!==prevState.isShowingImages){
            return {isShowingImages: nextProps.isShowingImages}
        }
        else{
            return prevState;
        }
    }
    render() {

        return (
            <>
                <img src={this.props.links.mission_patch}
                    alt="mission patch"
                    className="launchImg"></img>
                {(this.state.isShowingImages && this.props.isCurrentRoute===false) &&
                    <button className="showImagesButton"
                        onClick={this.isShowingImagesUpdate}>
                        Show Images</button>}
                
                {this.state.isShowingImages &&
                    (this.props.links.flickr_images.length > 0 ?
                    <div className="flickr">
                    {this.props.links.flickr_images.map((img, index) => {
                        return <img src={img}
                            alt={"flickr " + index}
                            className="flickrImg"
                            key={"flickr " + index}></img>;
                    })}
                    </div>:<div className="flickr">No Images</div>)
                }

            </>
        );
    }
}