import React from "react";
import "./gallery.min.css"
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
        original: "/images/memoriesImages/one/1d1.jpg",
        thumbnail: "/images/memoriesImages/one/1d1.jpg",
    },
    {
        original: "/images/memoriesImages/one/2d1.jpg",
        thumbnail: "/images/memoriesImages/one/2d1.jpg",
    },
    {
        original: "/images/memoriesImages/one/3d1.jpg",
        thumbnail: "/images/memoriesImages/one/3d1.jpg",
    },
    {
        original: "/images/memoriesImages/one/4d1.jpg",
        thumbnail: "/images/memoriesImages/one/4d1.jpg",
    },
    {
        original: "/images/memoriesImages/one/5d1.jpg",
        thumbnail: "/images/memoriesImages/one/5d1.jpg",
    },
    {
        original: "/images/memoriesImages/two/1d2.jpg",
        thumbnail: "/images/memoriesImages/two/1d2.jpg",
    },
    {
        original: "/images/memoriesImages/two/2d2.jpg",
        thumbnail: "/images/memoriesImages/two/2d2.jpg",
    },
    {
        original: "/images/memoriesImages/two/3d2.jpg",
        thumbnail: "/images/memoriesImages/two/3d2.jpg",
    },
    {
        original: "/images/memoriesImages/two/4d2.jpg",
        thumbnail: "/images/memoriesImages/two/4d2.jpg",
    },
    {
        original: "/images/memoriesImages/two/5d2.jpg",
        thumbnail: "/images/memoriesImages/two/5d2.jpg",
    },
    {
        original: "/images/memoriesImages/two/6d2.jpg",
        thumbnail: "/images/memoriesImages/two/6d2.jpg",
    },
];

class MyGallery extends React.Component {
    render() {
        return <ImageGallery items={images} />;
    }
}

export default function Gallery() {
    return (
        <div className="galleryContainer">
            <MyGallery />
        </div>
    );
}