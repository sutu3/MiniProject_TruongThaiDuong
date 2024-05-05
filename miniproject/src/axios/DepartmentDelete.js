import DepartmentApi from "../api/DepartmentApi";
import { useContext ,useState} from "react"
import { DepartmentContext } from "./DepartmentList1"

function DepartmentDelete(){
    const [name,setname] =useState("");   
    const  {department,setDepartment}=useContext(DepartmentContext)
    const [id,setId]=useState(0)
  
    const changeId =(e)=>{
        setId(e.target.value)
    }
    const deleteEmployee = async function(e){
      e.preventDefault();
      try {
        await DepartmentApi.deleteByID(id)
        const idint=parseInt(id);

        const index=department.findIndex(dep=>dep.id===idint)
        console.log(index,"index")
        if (index !== -1) {
            const newDepartmentArray= department.filter((emp, idx) => idx !== index);
            setDepartment(newDepartmentArray)
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
export default DepartmentDelete;