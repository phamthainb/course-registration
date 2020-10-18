import React from "react";

function RegisControl(props) {

  const onShowSubjectList = (e)=>{
    var value = e.target.value;
    props.onShowSubjectList(value);
  }

  const mapSubjects = props.subjects.map((sub, index) => {
    return (
      <option key={index} value={sub.id}>
        {`${sub.code} - ${sub.name} ( ${sub.credit} TC )`}
      </option>
    );
  });

  return (
    <div className="regis-control mb-3 mt-3">
      <select onChange={onShowSubjectList} defaultValue="subject">
        <option value="subject" disabled>Subject</option>
        {mapSubjects}
      </select>
    </div>
  );
}

export default RegisControl;
