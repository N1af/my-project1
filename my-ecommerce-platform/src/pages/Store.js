import React from "react";
import "./Store.css";
import image1 from "../assets/image 1.png";
import image2 from "../assets/image 2.png";
import image3 from "../assets/image 3.png";
import image4 from "../assets/image 4.png";
import image5 from "../assets/image 5.png";
import image9 from "../assets/image 9.jpg";
import image10 from "../assets/image 10.webp";
import image11 from "../assets/image 11.jpg";
import image12 from "../assets/image 12.jpg";
import image13 from "../assets/image 13.jpg";
import image14 from "../assets/image 14.jpg";
// import image18 from "../assets/image 18.jpg";
// import image19 from "../assets/image 19.jpg";

const images = [
  { src: image1, alt: "image1" },
  { src: image2, alt: "image2" },
  { src: image3, alt: "image3" },
  { src: image4, alt: "image4" },
  { src: image5, alt: "image5" },
  { src: image2, alt: "image2" },
  { src: image1, alt: "image1" },
  { src: image3, alt: "image3" },
  { src: image5, alt: "image5" },
];
const images1 = [
  { src: image9, alt: "image9" },
  { src: image10, alt: "image10" },
  { src: image9, alt: "image9" },
  { src: image10, alt: "image10" },
  { src: image10, alt: "image10" },
];

const images2 = [
  { src: image11, alt: "image11" },
  { src: image12, alt: "image12" },
  { src: image13, alt: "image13" },
  { src: image14, alt: "image14" },
];


const Store = () => {
  return (
    <div className="Home-container">
      <div className="H-Heading">
        <span>Store. </span>The best way to buy the
        <br />
        products you love.
      </div>

      <div className="Latest-Stock">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.src} alt={image.alt} className="L-image" />
            <div>{image.text}</div>
          </div>
        ))}
      </div>
      <div className="L-product">
        <span>The latest. </span>Take a look at what’s new, right now.
      </div>
      <div className="L-product-img">
        {images1.map((img, index) => (
          <div key={index} className="L-img-dv">
            <img src={img.src} alt={index.alt} className="L-img" />
          </div>
        ))}
        ;
      </div>

      <div className="L-product-img1">
        {images2.map((img1, index) => (
          <div key={index} className="L-img1-dv">
            <img src={img1.src} alt={index.alt} className="L-img1" />
          </div>
        ))}
        ;
      </div>

      <div className="h-product">
        <span>Help is here.</span> Whenever However you need it.
      </div>

      <div className="L-product-img2">
        {images2.map((img1, index) => (
            <div key={index} className="L-img2-dv">
                <img src={img1.src} alt={index.alt} className="L-img2"/>
            </div>
        ))}
      </div>

      <div>
        <span>The Store difference.</span> Even more reasons to shop with us.
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default Store;
