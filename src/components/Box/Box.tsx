import "./Box.css";

const Box = () => {
  return (
    <>
      <div
        id="example-element"
        className="relative transition-all flex items-center justify-center"
      >
        <div className="face front">-</div>
        <div className="face back border">2</div>
        <div className="face right border">3</div>
        <div className="face left border">4</div>
        <div className="face top border">5</div>
        <div className="face bottom border">6</div>
      </div>
    </>
  );
};

export default Box;
