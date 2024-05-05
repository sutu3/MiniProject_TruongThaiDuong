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
          <form onSubmit={(e) =>deleteEmployee(e)}>
              <label>
                  Id:
                  <input
                      type="text"
                      onChange={(e) => changeId(e)} />
                     
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
      
}

export default EmployeeDelete1;