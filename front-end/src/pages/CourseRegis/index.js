import React from "react";
import RegisControl from "./RegisControl";
import RegisNote from "./RegisNote";
import RegisTable from "./RegisTable";
import "./style.css";

function CourseRegis() {
  return (
    <div className="course-regis">
      <RegisControl></RegisControl>
      <RegisTable></RegisTable>
      <RegisNote></RegisNote>
    </div>
  );
}
export default CourseRegis;
