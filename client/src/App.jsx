import { useState } from "react";
import MenuBar from "./pages/MenuBar";
import RoutePages from "./pages/RoutePages";

function App() {
  return (
    <>
      <div className="">
        <MenuBar></MenuBar>
        <RoutePages></RoutePages>
      </div>
    </>
  );
}

export default App;
