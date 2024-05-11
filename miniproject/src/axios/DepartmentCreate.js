import { DepartmentContext } from "./DepartmentList1";
import { useState, useEffect, useContext } from "react";
import DepartmentApi from "../api/DepartmentApi";

function DepartmentCreate() {
  const [name, setname] = useState("");
  const { department, setDepartment } = useContext(DepartmentContext);
  const [employee, setEmployee] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (department.length > 0) {
      setId(department[department.length - 1].id);
    }
  }, [department]);

  const changeName = (e) => {
    setname(e.target.value);
  };

  const createDepartment = async function (e) {
    e.preventDefault();
    try {
      const body = {
        name,
        employee,
      };
      console.log(body);
      const temp = await DepartmentApi.create(body);
      temp.id = id + 1;
      // console.log(temp)
      setDepartment([...department, temp]);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(e) => createDepartment(e)}
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        placeholder="Enter Name Department"
        style={{
          width: "200px",
          height: "20px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "15px",
        }}
        type="text"
        onChange={(e) => changeName(e)}
      />

      <input
        type="submit"
        value="Submit"
        style={{
          width: "100px",
          height: "40px",
          backgroundColor: "transparent",
          borderRadius: "5px",
          fontWeight:'bold'
        }}
      />
    </form>
  );
}
export default DepartmentCreate;
