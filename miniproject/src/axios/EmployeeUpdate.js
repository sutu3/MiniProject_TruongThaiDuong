import React, { Component } from 'react'
import EmployeeApi from '../api/EmployeeApi';
import EmployeeList from './EmployeeList';
export class EmployeeUpdate extends Component {
    constructor(props){
        super(props);
        this.state={
            url:`http://localhost:8080`,
          };
         this.body={
          id:0,
          name:'',
          idDepartment:0
         } ;
    }
    
    changeId =(e)=>{
      
        this.body.id= e.target.value
        console.log(this.body.id);
    }

    changeName =(e)=>{
        this.body.name =e.target.value;
      
      console.log(this.body.name);
    }
    changeDepartmentId =(e)=>{
    
        this.body.idDepartment=e.target.value
        console.log(this.body.idDepartment);
    }
    updateEmployee =async function(e){
      e.preventDefault();
     try {
        console.log(this.body);
      await EmployeeApi.updateByID(this.body.id,this.body);
      e.target.reset();
     } catch (error) {
      console.log(error)
     }       
    }
     
    
      render() {
        return (
          <form onSubmit={(e) => this.updateEmployee(e)}>
              <label>
                  Id:
                  <input
                      type="text"
                      onChange={(e) => this.changeId(e)} />
                      <br/>
                  Name:
                  <input
                      type="text"
                      onChange={(e) => this.changeName(e)} />
                      <br/>
                 Department Id:
                  <input
                      type="text"
                      onChange={(e) => this.changeDepartmentId(e)} />
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
      }
}

export default EmployeeUpdate
