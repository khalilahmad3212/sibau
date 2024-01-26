import Footer from "../home/Footer";
import NavigationBar from "../home/NavigationBar";

const HeaderFooter = (props) => {
  return (
    <>
      <NavigationBar />
      {props.children}
      <Footer />
    </>
  );
};
export default HeaderFooter;
