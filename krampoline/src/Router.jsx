import { BrowserRouter, Route, Routes } from "react-router-dom";

import StickerPage from "./pages/Sticker";
import Start from "./pages/Start";
import StampMake from "./pages/StampMake";
import Main from "./pages/Main";
import ThemeSelect from "./pages/ThemeSelect";
import MakeNew from "./pages/MakeNew";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/make-new" element={<MakeNew />} />
        <Route path="/theme-select" element={<ThemeSelect />} />
        <Route path="/test" element={<Main />} />
        {/* <Route path="/sticker" element={<StickerPage />} /> */}
        <Route path="/stamp-make" element={<StampMake />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
