import Image from "next/image";
import Aside from "../Founder/Aside";

const PersonData = ({
  description,
  caption = "ABC ",
  image = "/staff-1.jpg",
}) => {
  return (
    <div className="st-1 container ">
      <div className="row py-6">
        <div className="offset-md-1 col-md-7 col-xs-12 col-sm-12">
          <div className="container ">
            <div className="flex py-10 overflow-hidden justify-center">
              <figure>
                <Image
                  className="scale-95  hover:scale-100 transition-all rounded-md"
                  src={image}
                  alt={image}
                  height={350}
                  width={350}
                />
                <figcaption className="text-center py-1">{caption}</figcaption>
              </figure>
            </div>
            <div className="custom_container">
              <div dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-xs-12 col-sm-12">
          <Aside />
        </div>
      </div>
    </div>
  );
};
export default PersonData;
