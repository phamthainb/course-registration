import React from "react";

const subjects = [
  {
    code: "BAS1146",
    name: "Tiếng Anh B12",
    credits: 4,
  },
  {
    code: "INT1313",
    name: "Cơ sở dữ liệu",
    credits: 3,
  },
  {
    code: "INT1319",
    name: "Hệ điều hành",
    credits: 3,
  },
  {
    code: "INT1330",
    name: "Ky thuat vy xu li",
    credits: 3,
  },
];
function RegisControl() {
  const mapSubjects = subjects.map((sub, index) => {
    return (
      <option key={index} value={sub.code}>
        {`${sub.code} - ${sub.name} (${sub.credits} TC)`}
      </option>
    );
  });

  return (
    <div className="regis-control">
      {/* <div className="form-group mr-5">
                <input type="text" placeholder="Search ..."/>
            </div> */}
      <select>{mapSubjects}</select>
    </div>
  );
}

export default RegisControl;
