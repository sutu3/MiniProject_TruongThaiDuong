import { DepartmentContext } from "./DepartmentList1";
import { useState,useEffect,useContext } from "react";
import DepartmentApi from "../api/DepartmentApi";

function    DepartmentCreate(){

    const [name,setname] =useState("");   
    const  {department,setDepartment}=useContext(DepartmentContext)
    const [employee,setEmployee]=useState([])
    const [id,setId]=useState(0)

    useEffect(()=>{
        if(department.length>0){
            setId(department[department.length-1].id)
        }
            
    },[department])

    const changeName =(e)=>{
        setname(e.target.value) 
    }

      const  createDepartment = async function(e){
        e.preventDefault();
          try {
            const body={
                
                name,
                employee
            }
            console.log(body)
            const temp=await DepartmentApi.create(body)
            temp.id=(id+1)
            // console.log(temp)
            setDepartment([...department,temp]) 
            e.target.reset();
          } catch (error) {
            console.log(error);
          }
      }
    return (
        <form onSubmit={(e) => createDepartment(e)}>
            <label>
                Name:
                <input
                    type="text"
                    onChange={(e) => changeName(e)} />
            </label>
  
            <input type="submit" value="Submit" />
        </form>
       
        
        
    );
}
export default DepartmentCreate;