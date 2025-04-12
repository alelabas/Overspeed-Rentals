import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

export function Gallery ( { vehicleImages }: { vehicleImages: string[] } ) {

    const [openGallery, setOpenGallery] = useState(false)

    return (
        <>
            <img src={vehicleImages[0]} onClick={() => setOpenGallery(true)}/>

            <Lightbox 
                open={openGallery}
                close={() => setOpenGallery(false)}
                slides={vehicleImages.map( img => {
                    return {
                        src: img
                    }
                })}
            />
        </>
    )
}