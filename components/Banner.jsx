"use client";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bottom-0 z-20 bg-gradient-to-t from-gray-100 to-transparent" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            width={1600}
            height={400}
            src="https://links.papareact.com/gi1"
            alt="bannerImage1"
            loading="lazy"
          />
        </div>
        <div>
          <Image
            width={1600}
            height={400}
            src="https://links.papareact.com/6ff"
            alt="bannerImage2"
            loading="lazy"
          />
        </div>
        <div>
          <Image
            width={1600}
            height={400}
            src="https://links.papareact.com/7ma"
            alt="bannerImage3"
            loading="lazy"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
