import { createContext, useState, useEffect } from "react";
import DepartmentApi from "../api/DepartmentApi";
import DepartmentCreate from "./DepartmentCreate";
import DepartmentDelete from "./DepartmentDelete";
import DepartmentUpdate from "./DepartmentUpdate";

export const DepartmentContext = createContext();
function DepartmentList1() {
  const [department, setDepartment] = useState([]);
  const getListDeparment = async function () {
    try {
      const temp = await DepartmentApi.getAll();
      setDepartment(temp);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getListDeparment();
  }, []);

  const deparmentList = department.map((department) => (
    <li
      key={department.id}
      //value={department}
      style={{
        display: "flex",
        gap: "30px",
        marginBottom: "10px",
        border: "2px solid black",
        width: "400px",
        margin: "auto",
        height: "80px",
        marginBottom: "10px",
        borderRadius: "5px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          padding: "10px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>ID:</span> {department.id}
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        {" "}
        <span style={{ fontWeight: "bold" }}>Department name:</span> <br />{" "}
        {department.departmentName}{" "}
      </div>
    </li>
  ));
  return (
    <>
      <DepartmentContext.Provider value={{ department, setDepartment }}>
        <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}
        >
          Thêm
        </p>
        <DepartmentCreate />
        <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}
        >
          Xóa
        </p>
        <DepartmentDelete />
        <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}
        >
          Sửa
        </p>
        <DepartmentUpdate />
      </DepartmentContext.Provider>
      <ul
        style={{
          height: "500px",
          overflow: "scroll",
          gap: "30px",
          border:'2px solid black'

        }}
      >
        {deparmentList}
      </ul>
      {/* <textarea value={department   }></textarea> */}
    </>
  );
}
export default DepartmentList1;
