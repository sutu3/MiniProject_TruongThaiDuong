import React from 'react';
import DepartmentList1 from './axios/DepartmentList1';
import EmployeeList from './axios/EmployeeList';
import RelativeList from './axios/RelativeList';
import './app1.css'
const miniproject=(
  < div className='contaner'>
  <div className='contanerItem'>
  <h1 style={{color:'red'}}>
  Department
  </h1> 
  <DepartmentList1/>  
  </div>
  <div className='contanerItem'>
  <h1 style={{
    color:'green'
  }}>
  Employee
  </h1>
  <EmployeeList/>
  </div>
  <div className='contanerItem'>
    <h1 style={{color:'gray'}}>Relative</h1>
    <RelativeList/>
  </div>
</div>
)
function App(){
  return(
    miniproject
  )
}

export default App;
