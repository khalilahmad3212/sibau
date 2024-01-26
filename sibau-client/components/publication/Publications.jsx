import Image from "next/image";
import { Accordion } from "react-bootstrap";
import AboutContent from "../about/AboutContent";

const PublicationTable = ({ publication, index }) => {
  const downloadFile = async (filename) => {
    const result = await fetch(`http://localhost:5000/publication/${filename}`);
    if (!result.ok) {
      throw new Error("File download failed");
    }
    const blob = await result.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const data = [
    {
      Id: 2,
      Title: "Prodpectus",
      Authors: "Sukkur IBA",
      Link: "motivation letter_20230722092255015Z.pdf",
      Year: "2023-07-21",
      JounalName: "Prodpectus",
      Type: "Sukkur IBA - Prospectus",
    },
  ];
  return (
    <>
      <Accordion className="my-3">
        <Accordion.Item eventKey={index}>
          <Accordion.Header>Business & Administration</Accordion.Header>
          <Accordion.Body>
            <div className="flex flex-wrap">
              {publication.map((item, index) => (
                <div key={index} className="text-center mx-1">
                  <figure className="text-center rounded-md p-2 border-2 border-gray-200 scale-95 hover:scale-105 transition-all">
                    <img
                      className="h-48 align-middle text-center  hover:rounded-md transition-all"
                      src={`https://api.dicebear.com/6.x/shapes/svg?seed=1221`}
                      alt={item.Title}
                    />

                    <figcaption className="text-center py-1">
                      {item?.Title}
                    </figcaption>
                  </figure>

                  <button
                    className="button rounded-md bg-blue-500 text-white mt-4 p-2 transition-all hover:bg-blue-600"
                    onClick={() => {
                      downloadFile(item.Link);
                    }}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
const Publications = ({ publicationData }) => {
  return (
    <div className="st-1">
      <div className="container sm:px-0 md:px-48 lg:px-52">
        <div className="mb-4">
          <AboutContent
            about={[
              `  Sukkur Institute of Business Administration has been imparting
       education with its core values merit, quality, and excellence since
       foundation. Sukkur IBA has achieved numerous milestones in a very
       short span of time that hardly any other institute has achieved in the
       history of Pakistan.
     `,
              `Sukkur IBA is mission driven institute and committed to serve towards
     the socioeconomic development of Pakistan through education and
     research.
     `,
            ]}
          />
        </div>
        <PublicationTable
          publication={publicationData["MS - PhD - Booklet"]}
          index={0}
        />
        <PublicationTable
          publication={publicationData["Sukkur IBA - Newsletter"]}
          index={1}
        />
        <PublicationTable
          publication={publicationData["Sukkur IBA - Prospectus"]}
          index={2}
        />
      </div>
    </div>
  );
};

export default Publications;
