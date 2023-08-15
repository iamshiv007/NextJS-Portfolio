import React, { Fragment, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Theme from "@/utils/Theme";
import BackTo from "@/components/buttons/BackTo";

const ReactResposiveCarousel = () => {
  const [arrows, setArrows] = useState(false);
  const [indicator, setIndicator] = useState(false);
  const [status, setStatus] = useState(false);
  const [keyBoard, setKeyBoard] = useState(false);
  const [thumbs, setThumbs] = useState(false);

  return (
    <Fragment>
      <Head>
        <title>React Responsive Carousel</title>
      </Head>

      <Theme>
        <BackTo backTo={"blogs"} />

        <div className="layoutContainer">
          <div className="layoutBox1">
            <h1 className="blog-heading">React Responsive Carousel</h1>
            <div className="md:w-[80%] w-[90%] m-auto flex flex-wrap gap-5 mb-5 mt-5">
              <div>
                <input
                  checked={arrows}
                  className="mx-1"
                  id="arrows"
                  name=""
                  onChange={() => setArrows(!arrows)}
                  type="checkbox"
                />
                <label htmlFor="arrows">ShowArrows</label>
              </div>

              <div>
                <input
                  checked={indicator}
                  className="mx-1"
                  id="indicator"
                  name=""
                  onChange={() => setIndicator(!indicator)}
                  type="checkbox"
                />
                <label htmlFor="indicator">showIndicators</label>
              </div>

              <div>
                <input
                  checked={status}
                  className="mx-1"
                  id="status"
                  name=""
                  onChange={() => setStatus(!status)}
                  type="checkbox"
                />
                <label htmlFor="status">showStatus</label>
              </div>

              <div>
                <input
                  checked={keyBoard}
                  className="mx-1"
                  id="keyBoard"
                  name=""
                  onChange={() => setKeyBoard(!keyBoard)}
                  type="checkbox"
                />
                <label htmlFor="keyBoard">useKeyboardArrows</label>
              </div>

              <div>
                <input
                  checked={thumbs}
                  className="mx-1"
                  id="thumbs"
                  name=""
                  onChange={() => setThumbs(!thumbs)}
                  type="checkbox"
                />
                <label htmlFor="thumbs">showThumbs</label>
              </div>
            </div>
            <div className="md:w-[60%] w-[90%] m-auto border dark:border-white border-black border-solid">
              <Carousel
                showArrows={arrows}
                showIndicators={indicator}
                showStatus={status}
                showThumbs={thumbs}
                useKeyboardArrows={keyBoard}
              >
                <div>
                  <Image
                    alt="CarouselImage1"
                    height={300}
                    src="/images/carousel1.png"
                    width={500}
                  />
                </div>
                <div>
                  <Image
                    alt="CarouselImage2"
                    height={300}
                    src={"/images/carousel2.png"}
                    width={500}
                  />
                </div>
                <div>
                  <Image
                    alt="CarouselImage3"
                    height={300}
                    src={"/images/carousel3.png"}
                    width={500}
                  />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="layoutBox2">Lorem</div>
        </div>
      </Theme>
    </Fragment>
  );
};

export default ReactResposiveCarousel;
