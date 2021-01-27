import './_gallery-practice.scss';
import React, {useState} from 'react';
import PropTypes from "prop-types";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const Gallery = (props) => {

    const {galleryItems} = props;

    const galleryArray = [];
    for (let item of galleryItems) {
        galleryArray.push(item.url);
    }

    const [photoIndex, setPhotoIndex] = useState(0);

    const [isGalleryOpen, setGalleryStatus] = useState(false);

    const GalleyItem = (props) => {

        const {data, id} = props;

        return (
            <div
                className="gallery-item"
                onClick={() => {
                    setGalleryStatus(true);
                    setPhotoIndex(id);
                }}
            >
                <img
                    className="gallery-image"
                    src={data.url}
                    alt={data.id}
                />
            </div>
        )
    }

    return (
        <div className="gallery">
            {galleryItems.map((item, id) =>
                <GalleyItem
                    key={id}
                    data={item}
                    id={id}
                />
            )}
            {isGalleryOpen && (
                <Lightbox
                    mainSrc={galleryArray[photoIndex]}
                    nextSrc={galleryArray[(photoIndex + 1) % galleryArray.length]}
                    prevSrc={galleryArray[(photoIndex + galleryArray.length - 1) % galleryArray.length]}
                    onCloseRequest={() => setGalleryStatus(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + galleryArray.length - 1) % galleryArray.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % galleryArray.length)
                    }
                />
            )}
        </div>
    )
}

Gallery.propTypes = {
    galleryItems: PropTypes.array.isRequired,
};

export default Gallery;