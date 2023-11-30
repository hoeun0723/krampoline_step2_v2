import { useLocation } from "react-router-dom";

import JejuCity from "./JejuCity.jsx";
import Namwon from "./Namwon.jsx";

const StickerPage = () => {
  const location = useLocation();
  const page = location.state.page;
  // const page = 2;

  if (page === 2) {
    return <JejuCity />;
  }

  if (page === 4) {
    return <Namwon />;
  }
};

export default StickerPage;
