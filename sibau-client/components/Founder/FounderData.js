import Image from "next/image";
import Aside from "./Aside";

const FounderData = ({ description }) => {
  return (
    <div className="st-1 container ">
      <div className="row py-6">
        <div className="offset-md-1 col-md-7 col-xs-12 col-sm-12">
          <div className="container ">
            {/* <div className="font-bold  text-3xl uppercase ">
              Founder and Patron in Chief
            </div>
             */}
            <div className="py-10 overflow-hidden">
              <figure>
                <Image
                  className="scale-95 hover:scale-100 transition-all rounded-md"
                  style={{}}
                  src={"/vice-chancellor-message.jpg"}
                  height={800}
                  width={800}
                  alt="founder"
                />
                <figcaption className="text-center py-1">
                  Late Nisar Ahmed Siddiqui
                </figcaption>
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
export default FounderData;
