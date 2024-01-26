import Marquee from "react-fast-marquee";

const Sponsors = () => {
  const sponsers = [
    "government-of-sindh.jpg",
    "lu-continental.jpg",
    "ogdcl.jpg",
    "ubl.jpg",
    "hec-pakistan-final.jpg",
    "national-bank-Pakistan.jpg",
    "ssgc.jpg",
    "usaid.jpg",
    "government-of-sindh.jpg",
    "lu-continental.jpg",
    "ogdcl.jpg",
    "ubl.jpg",
    "hec-pakistan-final.jpg",
    "national-bank-Pakistan.jpg",
    "ssgc.jpg",
    "usaid.jpg",
  ];

  return (
    <div className="container my-10 px-10 py-10" style={{}}>
      <div className="overflow-x-auto">
        <Marquee pauseOnHover={true}>
          {sponsers.map((sponser, index) => (
            <img
              src={`./sponsers/${sponser}`}
              alt={`Sponsor ${index + 1}`}
              key={index}
              className="inline-block mx-2"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsors;
