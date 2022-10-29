import React from "react";
import "./App.css";
import Menu from "./TabMenu/Menu";
import Calendar from "./Calendar/Calendar";
function App() {
  return (
    <div>
      <Menu />
      <div className="kalendar-obal">
        <div className="kalendar">
          <Calendar></Calendar>
        </div>
      </div>
    </div>
  );
}
export default App;
