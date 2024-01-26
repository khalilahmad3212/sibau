import ProgramSideMenu from "./ProgramSideMenu";
import { BsClock, BsCalendarDate } from "react-icons/bs";
import styles from "../../styles/admission/fees/feetable.module.css";

const TenureData = ({ years = 4, months = "January, August" }) => {
  return (
    <div className="flex flex-wrap lg:gap-10  md:gap-10   py-5">
      <div className="bg-[#ffc53a] text-[#292929] font-medium my-1 p-3 px-5 flex items-center  hover:bg-[#ffcd4f] transition-colors">
        <span className="pr-2">
          <BsClock className="font-medium text-[18px]" />
        </span>
        <span className="text-base text-[18px]">{years} Years / Onsite</span>
      </div>
      <div className="bg-[#ffc53a] text-[#292929] font-medium  my-1 p-4 px-5 flex items-center  hover:bg-[#ffcd4f] transition-colors">
        <span className="pr-2">
          <BsCalendarDate className="font-medium text-[18px]" />
        </span>
        <span className="text-base text-[18px]">{months}</span>
      </div>
    </div>
  );
};
const ProgramInfoData = ({
  pageData = {
    duration: "2",
    batches_month: "August",
    careerOptions:
      "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quis ex quam fugit libero corporis sapiente, omnis cumque doloribus similique nisi placeat rem numquam optio obcaecati error, expedita magnam. Debitis!\n",
    plo: "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quis ex quam fugit libero corporis sapiente, omnis cumque doloribus similique nisi placeat rem numquam optio obcaecati error, expedita magnam. Debitis!\n",
    overview:
      "      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, quis ex quam fugit libero corporis sapiente, omnis cumque doloribus similique nisi placeat rem numquam optio obcaecati error, expedita magnam. Debitis!\n",
  },
  schema,
}) => {
  return (
    <>
      <section className="st-1">
        <div className="container sm:px-0 md:px-28 lg:px-38">
          <div className="row">
            <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 lg:p-10 md:p-10">
              <div className="py-10 lg:pr-40 font-semibold mainIdea">
                {pageData?.main ||
                  `You’ll develop the cultural awareness and critical thinking
                skills you need to analyze and produce a broad range of
                discourse in a full spectrum of careers — and to make a
                difference in whatever you do.
                `}
              </div>
              <TenureData />
              <div className="program-paras-container">
                <div className="program-para py-5">
                  <div className="program-para-heading">Overview</div>
                  {pageData?.overview && (
                    <div className="program-para-info py-3">
                      {pageData.overview}
                    </div>
                  )}
                </div>
                <div className="program-para py-5">
                  <div className="program-para-heading">
                    Career Opportunities
                  </div>
                  {pageData?.careerOptions && (
                    <div className="program-para-info py-3">
                      {pageData.careerOptions}
                    </div>
                  )}
                </div>
                <div className="program-para py-5">
                  <div className="program-para-heading">
                    Program Learning Outcomes
                  </div>
                  {pageData?.plo && (
                    <div className="program-para-info py-3">{pageData.plo}</div>
                  )}
                </div>
              </div>

              <div className="schema">
                {schema?.map((item, index) => (
                  <div
                    key={index}
                    className={`overflow-x-auto ${styles.table_container}`}
                  >
                    <h2 className={styles.tbl_heading}>
                      {" "}
                      Semester {item.semester}
                    </h2>
                    <div className={styles.feetbl}>
                      <table>
                        <tbody>
                          <tr>
                            <th>Code</th>
                            <th>Course Name</th>
                            <th>Credit Hours</th>
                            <th>Pre Req</th>
                          </tr>
                          {item?.courses &&
                            JSON.parse(item.courses).map(
                              (subItem, subIndex) => (
                                <tr key={subIndex}>
                                  <td>{subItem.Code}</td>
                                  <td>{subItem.CourseName}</td>
                                  <td>{subItem.CreditHours}</td>
                                  <td>{subItem.PreRequisite}</td>
                                </tr>
                              )
                            )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12">
              <ProgramSideMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ProgramInfoData;
