import styles from "../../styles/admission/fees/feetable.module.css";
import ProgramSideMenu from "../ProgramInfo/ProgramSideMenu";

const DegreeReqsData = () => {
  return (
    <>
      <section className="st-1">
        <div className="container sm:px-0 md:px-28 lg:px-38">
          <div className="row">
            <div className="col-md-9 col-lg-9 col-sm-12 col-xs-12 lg:p-10 md:p-10">
              <div className="program-paras-container">
                <div className="program-para py-5">
                  <div className="program-para-heading">
                    Degree Requirements
                  </div>
                  <div className="program-para-info py-3">
                    The self-designed major in Communication Studies leads to a
                    BA or BS in Communication Studies. This major requires
                    completion of a minimum of 13 courses. Students choosing
                    this option must also prepare a path statement. This path
                    statement must be approved by the chair of Communication
                    Studies no later than the first semester of the junior year.
                  </div>
                  <div className="program-para-info">
                    Students are responsible for reading course descriptions
                    when choosing classes for their self-designed major. If they
                    choose a class that requires permission because of
                    prerequisites and/or is a course at another college within
                    Estuidar University and any of the graduate programs, they
                    must seek permission using the proper procedures. Requesting
                    permission is not a guarantee of being granted permission{" "}
                  </div>
                </div>
                <div className="program-para py-5">
                  <div className="program-para-heading">
                    Program Learning Outcomes
                  </div>
                  <div className="program-para-info py-3">
                    Communication studies addresses the ways in which words,
                    images, gestures, and symbols reflect and affect human
                    behavior. At Estuidar University, we explore the many ways
                    that communication can be used — and sometimes abused — to
                    effect change in culture, law, politics, business, and every
                    other realm in which people express themselves.
                  </div>
                </div>
                <div className="program-para py-5">
                  <div className="program-para-heading">
                    Major Requirements (24 units)
                  </div>
                  <div className="program-para-info py-3">
                    Demonstrate an understanding of how communication shapes
                    patterns of social interaction, the expression of cultural
                    values and norms, political practices and relations of
                    power, and our positions as local and global citizens.
                  </div>
                  <div className="program-para-info py-3">
                    Be able to use a variety of methodological tools to analyze
                    interpersonal, intercultural, and rhetorical discourse that
                    structures everyday interactions in both our public and
                    private lives.
                  </div>
                  <div className="program-para-info py-3">
                    Demonstrate an understanding of the possibilities, problems,
                    and history of discourse and deliberation in democracy and
                    will be prepared to use their knowledge to work for a just
                    and more humane world.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-12 col-xs-12 py-5">
              <ProgramSideMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default DegreeReqsData;
