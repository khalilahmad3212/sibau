import React, { useEffect } from "react";
import DescriptionContainer from "./CampusContent";
import ImageContainer from "./CampusImage";
import Aos from "aos";
const DescriptionAndImageContainer = ({
  heading,
  description,
  imageUrl,
  linkText,
  link,
  textFirst,
}) => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="">
      <div className="container sm:px-0 md:px-24 lg:px-28">
        <div className="row">
          {textFirst === true ? (
            <>
              <div
                className="col-md-6 col-xs-12"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="ease-in-back"
                data-aos-duration="1500"
              >
                <DescriptionContainer
                  heading={heading}
                  description={description}
                  link={link}
                  linkText={linkText}
                />
              </div>

              <div
                className="col-md-6 col-xs-12 flex items-center justify-center"
                data-aos="fade-down"
                data-aos-delay="900"
                data-aos-duration="1500"
              >
                <ImageContainer imageUrl={imageUrl} />
              </div>
            </>
          ) : (
            <>
              <div
                className="col-md-6 col-xs-12"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-easing="ease-in-back"
                data-aos-duration="1500"
              >
                <ImageContainer data-aos="fade-up" data-aos-duration="1500" />
              </div>
              <div
                className="col-md-6 col-xs-12"
                data-aos="fade-up"
                data-aos-delay="1100"
                data-aos-easing="ease-in-back"
                data-aos-duration="1500"
              >
                <DescriptionContainer
                  heading={heading}
                  description={description}
                  link={link}
                  linkText={linkText}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

DescriptionAndImageContainer.defaultProps = {
  textFirst: true,
};
export default DescriptionAndImageContainer;
