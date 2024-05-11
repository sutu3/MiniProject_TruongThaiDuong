import DepartmentApi from "../api/DepartmentApi";
import { DepartmentContext } from "./DepartmentList1";
import { useState,useContext } from "react";
function DepartmentUpdate(){
  
    const [name,setname] =useState("");   
    const  {department,setDepartment}=useContext(DepartmentContext)
    const [employee,setEmployee]=useState([])
    const [id,setId]=useState(0)

    const changeId =(e)=>{
    
        setId(e.target.value)
    }
    const changeName =(e)=>{
        setname(e.target.value)
     
    }

    const updateDepartment =async function(e){
      e.preventDefault();
     try {
        const body={
               
            name,employee
        }


      const temp=await DepartmentApi.updateByID(id,body);
      console.log( temp)
      const idint=parseInt(id);
      const index=department.findIndex(depr=>depr.id===idint)
      if(index !==-1){
        setDepartment(preDepart=>{
            const newDepart=[...preDepart]
            newDepart[index]=temp
            return newDepart
            
        })
      }
      e.target.reset();
     } catch (error) {
      console.log(error)
     }       
    }
        return (
          <form onSubmit={(e) => updateDepartment(e)}  style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}>
              
                  <input  style={{
                              width: "200px",
                              height: "20px",
                              padding: "10px",
                              borderRadius: "10px",
                              fontSize: "15px",
                    }} placeholder="Enter ID Department"
                      type="text"
                      onChange={(e) => changeId(e)} />
                    
                  <input  style={{
                              width: "200px",
                              height: "20px",
                              padding: "10px",
                              borderRadius: "10px",
                              fontSize: "15px",
                    }}  placeholder="Enter Name Department"
                      type="text"
                      onChange={(e) => changeName(e)} />
                      
               
             
              <input type="submit" value="Submit" 
                style={{
          width: "100px",
          height: "40px",
          backgroundColor: "transparent",
          borderRadius: "5px",
          fontWeight:'bold'
        }} />
          </form>
      );
}

export default DepartmentUpdate;