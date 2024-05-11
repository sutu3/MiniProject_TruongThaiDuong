import { useContext, useEffect, useState } from "react";

import { RelativeContext } from "./RelativeList";
import RelativeApi from "../api/RelativeApi";
function RelativeCreate() {
  const [relativesName, setRelativesName] = useState("");
  const [relativesAge, setRelativesAge] = useState(0);
  const [employeeid, setEmployeeId] = useState(0);
  const [id, setId] = useState(0);
  const { relative, setRelative } = useContext(RelativeContext);

  useEffect(() => {
    if (relative.length > 0) {
      setId(relative[relative.length - 1].relativesid);
    }
  }, [relative]);

  const changeName = (e) => {
    setRelativesName(e.target.value);
  };
  const changeEmployeeId = (e) => {
    setEmployeeId(parseInt(e.target.value));
  };
  const changeAge = (e) => {
    setRelativesAge(parseInt(e.target.value));
  };
  const createRelative = async function (e) {
    e.preventDefault();
    try {
      const body = {
        relativesName,
        relativesAge,
        employeeid,
      };
      console.log("relativesName" + typeof relativesName);
      console.log("relativesAge" + typeof relativesAge);
      console.log("employeeId" + typeof employeeid);
      const temp = await RelativeApi.create(body);
      console.log(temp);
      temp.relativesid = relative[relative.length - 1].relativesid + 1;
      setRelative([...relative, temp]);
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      onSubmit={(e) => createRelative(e)}
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input
        placeholder="Enter Name Realtive"
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
        placeholder="Enter Age Realtive"
        style={{
          width: "200px",
          height: "20px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "15px",
        }}
        type="text"
        onChange={(e) => changeAge(e)}
      />

      <input
        placeholder="Enter ID Realtive"
        style={{
          width: "200px",
          height: "20px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "15px",
        }}
        type="text"
        onChange={(e) => changeEmployeeId(e)}
      />

      <input type="submit" value="Submit" />
    </form>
  );
}

export default RelativeCreate;
