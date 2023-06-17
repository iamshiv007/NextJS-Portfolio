import Navbar from "@/components/Navbar";
import Theme from "@/components/Theme";
import ThemeBtn from "@/components/ThemeBtn";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ReactMasonary = () => {
  const [photos, setPhotos] = useState([]);

  const config = {
    headers: {
      Authorization: "TXyCeZ0GtP0M11icf6Gwn1WBN78b3tlFpIhXOXR3TOaJygR6bAaINnOl",
    },
  };

  useEffect(() => {
    axios
      .get(`https://api.pexels.com/v1/curated?page=${1}`, config)
      .then((res) => {
        setPhotos(res.data.photos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>React Masonary</title>
      </Head>
      <Theme>
        <Navbar />

        <ThemeBtn />

        <div className="dark:bg-black">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
          >
            <Masonry>
              {photos.map((photo, key) => (
                <div style={{ margin: "10px" }} key={key}>
                  <img src={photo.src.original} alt={photo.photographer} />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </Theme>
    </Fragment>
  );
};

export default ReactMasonary;
