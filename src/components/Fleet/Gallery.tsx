import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import Counter  from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/plugins/counter.css";
import { FormattedMessage } from "react-intl";

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
                className="gallery-image"
                alt="Vehicle images"
            />

            <h4 onClick={() => {
                    setOpenGallery(true)
                    modalRef.current!.close()
                }}
                className="click-to-see-more"
            >
                <FormattedMessage id="app.fleet.button" defaultMessage="Click to see more" />
            </h4>

            <Lightbox 
                open={openGallery}
                plugins={[Counter]}
                counter={{ container: { style: { top: "unset", bottom: 0 } } }}
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