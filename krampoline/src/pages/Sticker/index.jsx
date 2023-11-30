import { useLocation } from "react-router-dom";

import JejuCity from "./Part/JejuCity.jsx";
import Namwon from "./Part/Namwon.jsx";
import JoongMoon from "./Part/JoongMoon.jsx";
import Daejeon from "./Part/Daejeon.jsx";
import Hanlim from "./Part/Hanlim.jsx";
import GooJwa from "./Part/GooJwa.jsx";

const StickerPage = () => {
  const location = useLocation();
  const page = location.state.page;
  // const page = 2;

  if (page === 1) {
    return <Hanlim />;
  }
  if (page === 2) {
    return <JejuCity />;
  }
  if (page === 3) {
    return <GooJwa />;
  }
  if (page === 4) {
    return <Namwon />;
  }
  if (page === 5) {
    return <JoongMoon />;
  }
  if (page === 6) {
    return <Daejeon />;
  }
};

export default StickerPage;
