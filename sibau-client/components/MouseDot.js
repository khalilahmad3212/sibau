import { useEffect, useRef } from "react";

const MouseDot = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = dotRef.current;
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="lg:block hidden"
      ref={dotRef}
      style={{
        position: "fixed",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "black",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "left 0.3s ease, top 0.3s ease",
      }}
    ></div>
  );
};

export default MouseDot;
