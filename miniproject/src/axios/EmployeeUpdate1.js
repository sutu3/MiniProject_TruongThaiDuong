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
          <form onSubmit={(e) => updateEmployee(e)} 
           style={{
        display: "flex",
        flexWrap:'wrap',
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
                    }} placeholder="Enter ID Employee"
                      type="text"
                      onChange={(e) => changeId(e)} />
                     
                  
                  <input style={{
                              width: "200px",
                              height: "20px",
                              padding: "10px",
                              borderRadius: "10px",
                              fontSize: "15px",
                    }} placeholder="Enter Name Employee"
                      type="text"
                      onChange={(e) => changeName(e)} />
                    
                 
                  <input style={{
                              width: "200px",
                              height: "20px",
                              padding: "10px",
                              borderRadius: "10px",
                              fontSize: "15px",
                    }} placeholder="Enter ID Department"
                      type="text"
                      onChange={(e) => changeDepartmentId(e)} />
              
              <input type="submit" value="Submit"  style={{
          width: "100px",
          height: "40px",
          backgroundColor: "transparent",
          borderRadius: "5px",
          fontWeight:'bold'
        }} />
          </form>
      );
      
}
export default EmployeeUpdate1;