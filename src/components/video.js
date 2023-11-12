import React from "react";
import ReactPlayer from 'react-player'

function video() {

    const videoEnded = () => { 
        alert('la video est terminée')
    }

    const externalSource = 'https://www.youtube.com/watch?v=LXb3EKWsInQ';

    const internalSource = 'assets/video/video.mp4';
    return (
        <div>
           
            <ReactPlayer
             url={externalSource} 
             controls
             playing
             muted
             className="player-video"
             onEnded={videoEnded}
             />
        </div>
    );
}

export default video;