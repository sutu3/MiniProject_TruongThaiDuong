import React, { Component } from 'react'
import EmployeeApi from '../api/EmployeeApi';
export class EmployeeId extends Component {
  constructor(props){
    super(props);
    this.state={
        url:`http://localhost:8080`,
        id:0,
        name:""
    };
}
 getEmployeeById = async function(id){
    const employ=EmployeeApi.getByID(id)
    employ.then(result=>{
      this.setState({
        id:result.employeeID,
        name:result.employeeName
    })
   }).catch(error=>{
     console.log(error)
   })

}
  handleId=(e)=>{
    this.getEmployeeById(e.target.value)
  }


  render() {
   return(
    <div>
  
      <input type="text" onChange={this.handleId} placeholder='Employee' />
      <p>{this.state.id} {this.state.name}</p>
      
    </div>
   )
 
}
}
export default EmployeeId
