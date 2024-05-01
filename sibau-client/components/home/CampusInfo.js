const { useState, useEffect } = require("react");
const { default: DescriptionAndImageContainer } = require("./Campus");
const { getValueByKey } = require("@/apis");

const CampusInfo = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("home-campus-info");
        result.value = JSON.parse(result.value)
        console.log('data: ', result);
        setData(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <DescriptionAndImageContainer
      heading={"Campus Info"}
      description={data?.value.para}
      link={"/campus"}
      imageUrl={`http://localhost:5001/file-data-images/${data?.value.Image}`}
      linkText={"About Campus"}
    />
  );
};
export default CampusInfo;
