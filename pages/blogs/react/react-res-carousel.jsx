import React, { Fragment, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Head from "next/head";
import Theme from "@/components/Theme";
import BackTo from "@/components/BackTo";

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
            <h1 className="text-3xl  text-center my-5">
              React Responsive Carousel
            </h1>
            <div className="md:w-[80%] w-[90%] m-auto flex flex-wrap gap-5 mb-5">
              <div>
                <input
                  type="checkbox"
                  onChange={() => setArrows(!arrows)}
                  name=""
                  checked={arrows}
                  id="arrows"
                  className="mx-1"
                />
                <label htmlFor="arrows">ShowArrows</label>
              </div>

              <div>
                <input
                  className="mx-1"
                  type="checkbox"
                  onChange={() => setIndicator(!indicator)}
                  name=""
                  checked={indicator}
                  id="indicator"
                />
                <label htmlFor="indicator">showIndicators</label>
              </div>

              <div>
                <input
                  className="mx-1"
                  type="checkbox"
                  onChange={() => setStatus(!status)}
                  name=""
                  checked={status}
                  id="status"
                />
                <label htmlFor="status">showStatus</label>
              </div>

              <div>
                <input
                  className="mx-1"
                  type="checkbox"
                  onChange={() => setKeyBoard(!keyBoard)}
                  name=""
                  checked={keyBoard}
                  id="keyBoard"
                />
                <label htmlFor="keyBoard">useKeyboardArrows</label>
              </div>

              <div>
                <input
                  className="mx-1"
                  type="checkbox"
                  onChange={() => setThumbs(!thumbs)}
                  name=""
                  checked={thumbs}
                  id="thumbs"
                />
                <label htmlFor="thumbs">showThumbs</label>
              </div>
            </div>
            <div className="md:w-[60%] w-[90%] m-auto border dark:border-white border-black border-solid">
              <Carousel
                showArrows={arrows}
                showIndicators={indicator}
                showStatus={status}
                useKeyboardArrows={keyBoard}
                showThumbs={thumbs}
              >
                <div>
                  <img src="/images/carousel1.png" alt="CarouselImage1" />
                </div>
                <div>
                  <img src={`/images/carousel2.png`} alt="CarouselImage2" />
                </div>
                <div>
                  <img src={`/images/carousel3.png`} alt="CarouselImage3" />
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
