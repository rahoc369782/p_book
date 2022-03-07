import React, { useState } from 'react'
import Carousel from "react-elastic-carousel";
import Chip from '@mui/material/Chip'
const breakPoints = [
    { width: 1, itemsToShow: 1 },
];
const MediaSlider = ({ media_content }) => {
    const [counts, setCounts] = useState(1)
    console.log('counts: ', counts);
    return (
        <div>
            <Carousel onChange={(o, i) => setCounts(i + 1)} style={{ zIndex: "-1" }} pagination={false} enableTilt={false} showArrows={false} breakPoints={breakPoints}>
                {media_content.map((item, index) => (
                    <div key={index}>
                        <img alt="posts_media" src={item} />
                    </div>
                ))}
            </Carousel>
            <div className="counter_of_posts">
                <Chip style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "0px 2px", height: 25, fontSize: "10px", color: "white"}} label={`${counts} / ${media_content.length}`} />
            </div>

        </div>
    )
}
export { MediaSlider }
