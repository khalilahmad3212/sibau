import Footer from "../home/Footer";
import NavigationBar from "../home/NavigationBar";

const HeaderFooter = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};
export default HeaderFooter;
