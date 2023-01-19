import './creative.css';
import { Rnd } from "react-rnd";
import Creative from './creative';


const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};




function ResizableContainer() {
  return (
        <>
        

          <Rnd
    style={style}
    default={{
      x: 0,
      y: 0,
      width: 550,
      height: 400
    }}
  >
    <Creative ></Creative>
</Rnd>
        </>
  );
}

export default ResizableContainer;;
