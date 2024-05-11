import React, { createContext, useEffect, useState } from 'react'
import EmployeeApi from '../api/EmployeeApi';
import EmployeeCreate1 from './EmployeeCreate1';
import EmployeeDelete1 from './EmployeeDelete1';
import EmployeeUpdate1 from './EmployeeUpdate1';
import EmployeeId from './EmployeeId';

export const EmployeeContext=createContext();

function EmployeeList(){
    
    const [employee,setEmployee]=useState([]);
    const getListEmployee = async function (){
        try {
            const temp=await EmployeeApi.getAll();
            setEmployee(temp)
     } catch (error) {
      console.log(error)
     }
  }

  
  useEffect(()=>{
    getListEmployee();
  },[])
    const personList = employee.map((item,index) =>
        <li key={item.employeeID} 
      style={{
        display: "flex",
        gap: "30px",
        marginBottom: "10px",
        border: "2px solid black",
        width: "400px",
        margin: "auto",
        height: "80px",
        marginBottom: "10px",
        borderRadius: "5px",
        textAlign: "left",
      }}>
           <div 
        style={{
          padding: "10px",
        }}>
            <span style={{ fontWeight: "bold" }}>ID:</span>{item.employeeID}<br/>
            <span style={{ fontWeight: "bold" }}>Employee name: </span> {item.employeeName}<br/>
            <span style={{ fontWeight: "bold" }}> Department ID: </span>{item.department}

           </div>
            
        </li>)
   return(
    <>
      <EmployeeContext.Provider value={{employee,setEmployee}}>
         <p 
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}>Thêm</p>
          <EmployeeCreate1/>
          <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}>Xóa</p>
          <EmployeeDelete1/>
          <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}>Sửa</p>
          <EmployeeUpdate1/>
       </EmployeeContext.Provider>
       <ul 
        style={{
          height: "500px",
          overflow: "scroll",
          gap: "30px",
          border:'2px solid black'

        }}>
        {personList}
       </ul>
    </>     
   )
}

export default EmployeeList