import React from "react";
import Body from "./Component/Body";
import Circular from "./Components/Circular";
import Onscroll from "./Components/Onscroll";
import Long from "./Components/Long";
import Roll from "./Components/Roll";
import Autotype from "./Components/Autotype";

const App = () => {
  return (
    <div>
      <Autotype />
      <Roll />
      <Body />
      <Circular />
      <Onscroll />
    </div>
  );
};

export default App;
