import Footer from "../home/Footer";
import NavigationBar from "../home/NavigationBar";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className=" mt-20">
        {children}
      </div>
      <Footer />
    </>
  );
};
export default HeaderFooter;
