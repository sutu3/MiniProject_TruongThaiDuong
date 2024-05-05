import React, { Component } from 'react'
import EmployeeApi from '../api/EmployeeApi';
export class EmpoyeeDelete extends Component {
    constructor(props){
        super(props);
        this.state={
            url:`http://localhost:8080`,
          };
         this.body={
          id:0,
         } ;
    }
    
    changeId =(e)=>{
        this.body.id= e.target.value
    }

    deleteEmployee = async function(e){
      e.preventDefault();
      try {
        await EmployeeApi.deleteByID(this.body.id)
        e.target.reset();
      } catch (error) {
        console.log(error)
      }
             
      
    }
      render() {
        return (
          <form onSubmit={(e) => this.deleteEmployee(e)}>
              <label>
                  Id:
                  <input
                      type="text"
                      onChange={(e) => this.changeId(e)} />
                      <br/>
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
      }
}

export default EmpoyeeDelete
