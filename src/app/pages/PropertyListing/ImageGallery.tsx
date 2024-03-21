import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

// import "./styles.css";

export function ImagesGallery (props:any) {

    const images = [
      {
        original: "https://th.bing.com/th/id/OIP.0UcI8wXkq9g_HtrRFsop7QHaE0?rs=1&pid=ImgDetMain",
        thumbnail: "https://th.bing.com/th/id/OIP.0UcI8wXkq9g_HtrRFsop7QHaE0?rs=1&pid=ImgDetMain"
      },
      {
        original: "https://i.pinimg.com/originals/98/97/57/989757fc6d26fc5fa5ff826033c42cab.jpg",
        thumbnail: "https://i.pinimg.com/originals/98/97/57/989757fc6d26fc5fa5ff826033c42cab.jpg"
      },
      {
        original: "https://image1.rentals.com/imgr/a0af78beab4c0fb0266f6da7ff1d8221/",
        thumbnail: "https://image1.rentals.com/imgr/a0af78beab4c0fb0266f6da7ff1d8221/"
      }
    ];

    return (
      <ImageGallery
        items={images}
        showBullets={false}
        showIndex={false}
        showThumbnails={true}
        lazyLoad={false}
        showPlayButton={false}
        showNav={true}
        showFullscreenButton={true}
        thumbnailPosition={"left"}
      />
    );
  }


