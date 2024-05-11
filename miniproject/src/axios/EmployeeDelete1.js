import EmployeeApi from "../api/EmployeeApi"
import { useContext ,useState} from "react"
import { EmployeeContext } from "./EmployeeList"
function EmployeeDelete1(){


    const  {employee,setEmployee}=useContext(EmployeeContext)

    const [id,setId]=useState(0)
 
    const changeId =(e)=>{
        setId(e.target.value)
    }
   
   
   
    const deleteEmployee = async function(e){
      e.preventDefault();
      try {
        await EmployeeApi.deleteByID(id)
        const idint=parseInt(id);

        const index=employee.findIndex(emp=>emp.employeeID===idint)
        console.log(index,"index")
        if (index !== -1) {
            const newEmployeeArray= employee.filter((emp, idx) => idx !== index);
            console.log(newEmployeeArray)
            setEmployee(newEmployeeArray)
        }
        setId(-1)
        e.target.reset();
      } catch (error) {
        console.log(error)
      }
             
      
    }
     
        return (
          <form onSubmit={(e) =>deleteEmployee(e)} style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}>
            
                  <input 
        placeholder="Enter ID Employee"
        style={{
          width: "200px",
          height: "20px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "15px",
        }}
                      type="text"
                      onChange={(e) => changeId(e)} />
                     
              
              <input type="submit" value="Submit"  style={{
          width: "100px",
          height: "40px",
          backgroundColor: "transparent",
          borderRadius: "5px",
          fontWeight:'bold'
        }}/>
          </form>
      );
      
}

export default EmployeeDelete1;