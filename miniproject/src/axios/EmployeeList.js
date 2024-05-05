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
        <li key={item.employeeID}>
           <pre>
            ID: {item.employeeID}<br/>
            Employee name: {item.employeeName}<br/>
            Department ID: {item.departmentID}

           </pre>
            
        </li>)
   return(
    <>
      <EmployeeContext.Provider value={{employee,setEmployee}}>
         <p>Thêm</p>
          <EmployeeCreate1/>
          <p>Xóa</p>
          <EmployeeDelete1/>
          <p>Sửa</p>
          <EmployeeUpdate1/>
       </EmployeeContext.Provider>
       <ul style={{listStyle:'none'}}>
        {personList}
       </ul>
    </>     
   )
}

export default EmployeeList