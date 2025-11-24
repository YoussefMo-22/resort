import React from 'react';

function VideoSection() {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <video
                src="https://sani-prd-cdn.azureedge.net/media/by4n2pud/gastronomy.mp4"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            ></video>
        </div>
    );
}

export default VideoSection;
