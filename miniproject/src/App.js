import React from 'react';
import DepartmentList1 from './axios/DepartmentList1';
import EmployeeList from './axios/EmployeeList';
const miniproject=(
  < div className='contaner'>
  <div className='contanerItem'>
  <h1>
  Department
  </h1> 
  <DepartmentList1/>  
  </div>
  <div className='contanerItem'>
  <h1>
  Employee
  </h1>
  <EmployeeList/>
  </div>
</div>
)
function App(){
  return(
      miniproject
  )
}

export default App;
