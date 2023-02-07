import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "pages/Home";
import Dietetics from "pages/Dietetics";
import Exercise from "pages/Exercise";
import Timer from "pages/Exercise/Timer";
import Routine from "pages/Routine/index";
import InputRoutine from "pages/InputRoutine/index";

import TopBar from "components/TopBar";
import BottomNav from "components/BottomNav";
import { useEffect, useState } from "react";

// jsx
const App = () => {
  const [largeCategory, setLargeCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [navValue, setNavValue] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (navValue === 0) navigate("/dietetics");
    else if (navValue === 1) navigate("/");
    else if (navValue === 2) navigate("/exercise");
  }, [navValue]);

  return (
    <>
      <TopBar largeCategory={largeCategory} subCategory={subCategory} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setLargeCategory={setLargeCategory}
              setSubCategory={setSubCategory}
            />
          }
        />
        <Route
          path="/dietetics"
          element={
            <Dietetics
              setLargeCategory={setLargeCategory}
              setSubCategory={setSubCategory}
            />
          }
        />
        <Route
          path="/exercise/*"
          element={
            <Exercise
              setLargeCategory={setLargeCategory}
              setSubCategory={setSubCategory}
            />
          }
        >
          <Route path="timer" element={<Timer />} />
        </Route>
        <Route path="/routine/" element={<Routine />} />
        <Route path="/routineset/" element={<InputRoutine />} />
      </Routes>
      <BottomNav navValue={navValue} setNavValue={setNavValue} />
    </>
  );
};

export default App;
