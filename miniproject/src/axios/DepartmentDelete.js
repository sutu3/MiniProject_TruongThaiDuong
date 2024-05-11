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
          <form onSubmit={(e) =>deleteEmployee(e)}
           style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}>
              
                  <input style={{
                              width: "200px",
                              height: "20px",
                              padding: "10px",
                              borderRadius: "10px",
                              fontSize: "15px",
                    }} placeholder="Enter ID Department"
                      type="text"
                      onChange={(e) => changeId(e)} />
                     
              
              <input type="submit" value="Submit" 
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
export default DepartmentDelete;