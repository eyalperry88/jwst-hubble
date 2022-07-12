import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import hubble from "./hubble.webp";
import jwst from "./jwst.webp";

function App() {
  return (
    <div className="App">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src={hubble}
            alt="Hubble"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={jwst}
            alt="JWST"
          />
        }
        onlyHandleDraggable
      />
    </div>
  );
}

export default App;
