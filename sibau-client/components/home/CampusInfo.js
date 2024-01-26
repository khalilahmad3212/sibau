const { useState, useEffect } = require("react");
const { default: DescriptionAndImageContainer } = require("./Campus");
const { getValueByKey } = require("@/apis");

const CampusInfo = () => {
  const [para, setPara] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getValueByKey("home-campus-info");
        setPara(JSON.parse(result.value));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <DescriptionAndImageContainer
      heading={"Campus Info"}
      description={para}
      link={"/campus"}
      linkText={"About Campus"}
    />
  );
};
export default CampusInfo;
