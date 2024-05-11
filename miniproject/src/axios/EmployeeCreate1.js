import { useContext, useEffect, useState } from "react";
import EmployeeApi from "../api/EmployeeApi";
import { EmployeeContext } from "./EmployeeList";

function EmployeeCreate1(){
    const [name,setname] =useState("");
    const [idDepartment,setIdDepartment]=useState(0);
    const [id,setId]=useState(0)
    const  {employee,setEmployee}=useContext(EmployeeContext)
   
  
    


    useEffect(()=>{
        if(employee.length>0){
            setId(employee[employee.length-1].employeeID)
        }
            
    },[employee])

    const changeName =(e)=>{
        setname(e.target.value) 
    }
     const  changeDepartmentId =(e)=>{
          setIdDepartment(e.target.value)
      }
      const  createEmployee = async function(e){
        e.preventDefault();
          try {
            const body={
               
                name,idDepartment
            }
            
            const temp=await EmployeeApi.create(body)
            temp.employeeID=(employee[employee.length-1].employeeID+1)
            setEmployee([...employee,temp]) 
            e.target.reset();
          } catch (error) {
            console.log(error);
          }
      }
    return (
        <form onSubmit={(e) => createEmployee(e)} 
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}>
            
                <input 
        placeholder="Enter Name Employee"
        style={{
          width: "200px",
          height: "20px",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "15px",
        }}
                    type="text"
                    onChange={(e) => changeName(e)} />
             
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

export default EmployeeCreate1;