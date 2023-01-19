import './creative.css';
import background from "./img/bg.jpg";
import copy from "./img/copy-b.svg";
import logo from "./img/logo.svg";
import cta from "./img/cta.svg";

function Creative() {
    return (
          <>

        <div className="creative">
          <div style={{ backgroundImage:`url(${background})` }}  className="block bg"></div>
          <div style={{ backgroundImage:`url(${logo})` }} className="block logo"></div>  
          <div style={{ backgroundImage:`url(${copy})` }}  className="block copy"></div>  
          <div style={{ backgroundImage:`url(${cta})` }}  className="block cta"></div>  
  
        </div>          

          </>
    );
  }

export default Creative;

