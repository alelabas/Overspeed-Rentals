import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";

interface Props {
    vehicleImages: string[]
    modalRef: React.RefObject<HTMLDialogElement>
}

export function Gallery ( { vehicleImages, modalRef }: Props ) {

    const [openGallery, setOpenGallery] = useState(false)

    return (
        <>
            <img
                src={vehicleImages[0]} 
                onClick={() => {
                    setOpenGallery(true)
                    modalRef.current!.close()
                }}
                className="gallery-image"
            />

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