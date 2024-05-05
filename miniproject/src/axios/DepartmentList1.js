import { createContext,useState,useEffect } from "react";
import DepartmentApi from "../api/DepartmentApi";
import DepartmentCreate from "./DepartmentCreate";
import DepartmentDelete from "./DepartmentDelete";
import DepartmentUpdate from "./DepartmentUpdate";


export const DepartmentContext=createContext();
function DepartmentList1(){

    const [department,setDepartment]=useState([]);
    const getListDeparment = async function (){
        try {
            const temp=await DepartmentApi.getAll();
            setDepartment(temp)
     } catch (error) {
      console.log(error)
     }
  }

  
  useEffect(()=>{
    getListDeparment();
  },[])

    const deparmentList = department.map(
        department=>
        <li key={department.id}>
            <pre>
            ID: {department.id}<br/>
            Department name: {department.name} 
           
            </pre>
          
        </li>)
   return(
    <>
     <DepartmentContext.Provider value={{department,setDepartment}}>
            <p>Thêm</p>
            <DepartmentCreate/>
            <p>Xóa</p>
            <DepartmentDelete/>
            <p>Sửa</p>
            <DepartmentUpdate/>
      </DepartmentContext.Provider>
       <ul style={{listStyle:'none'}}>
        {deparmentList}
      </ul>
     
    </>
   
   )
}
export default DepartmentList1;