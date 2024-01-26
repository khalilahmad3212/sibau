const CenteredContainer = (props) => {
  return (
    <section className="st-1">
      <div className="container  mt-5 st-1">{props.children}</div>
    </section>
  );
};
export default CenteredContainer;
