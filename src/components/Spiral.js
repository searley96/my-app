import { gsap } from "gsap";

function Spiral() {

  const spiral = require("./images/myspiral.png");

  function spiralSpin() {
    gsap.to("#spiral-img", { rotation: "+=360", repeat: 10 });
    
  }
  // useEffect(() => {
  //   spiralSpin();
  //   window.scrollTo(0, 0); // Scrolls to the top of the page
  // }, []);

  return (
    <>
          <img id="spiral-img" src={spiral} width="100%" height="100%" />
          {spiralSpin()}
          </>
  );
}

export default Spiral;