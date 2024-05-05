import { useState,useContext } from "react";
import EmployeeApi from "../api/EmployeeApi";
import { EmployeeContext } from "./EmployeeList";
function EmployeeUpdate1(){
    const [name,setname] =useState("");
    const [idDepartment,setIdDepartment]=useState(0);
    const [id,setId]=useState(0)
    const  {employee,setEmployee}=useContext(EmployeeContext)

    const changeId =(e)=>{
    
        setId(e.target.value)
    }
    const changeName =(e)=>{
        setname(e.target.value)
     
    }
    const changeDepartmentId =(e)=>{
        setIdDepartment(e.target.value)
    }
    const updateEmployee =async function(e){
      e.preventDefault();
     try {
        const body={
               
            name,idDepartment
        }


      const temp=await EmployeeApi.updateByID(id,body);
      console.log( temp)
      const idint=parseInt(id);
      const index=employee.findIndex(emp=>emp.employeeID===idint)
      if(index !==-1){
        setEmployee(preEmploy=>{
            const newEmploy=[...preEmploy]
            newEmploy[index]=temp
            return newEmploy
            
        })
      }
      e.target.reset();
     } catch (error) {
      console.log(error)
     }       
    }
     
    
     
        return (
          <form onSubmit={(e) => updateEmployee(e)}>
              <label>
                  Id:
                  <input
                      type="text"
                      onChange={(e) => changeId(e)} />
                     
                  Name:
                  <input
                      type="text"
                      onChange={(e) => changeName(e)} />
                    
                 Department Id:
                  <input
                      type="text"
                      onChange={(e) => changeDepartmentId(e)} />
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
      
}
export default EmployeeUpdate1;