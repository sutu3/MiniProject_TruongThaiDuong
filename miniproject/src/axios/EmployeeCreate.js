import React from 'react'
import EmployeeApi from '../api/EmployeeApi';
class EmployeeCreate extends React.Component {
  constructor(props){
    super(props);
    this.state={
        url:`http://localhost:8080`,
      };
     this.body={
      name:'',
      idDepartment:0
     };
}

      changeName =(e)=>{
        this.body.name =e.target.value;
        
        console.log(this.body.name);
      }
      changeDepartmentId =(e)=>{

          this.body.idDepartment=e.target.value
          console.log(this.body.idDepartment);
      }
      createEmployee = async function(e){
        e.preventDefault();
          try {
            console.log(this.body)
           await EmployeeApi.create(this.body)
            e.target.reset();
          } catch (error) {
            console.log(error);
          }
      }
  render() {
    return (
      
      <form onSubmit={(e) => this.createEmployee(e)}>
          <label>
              Name:
              <input
                  type="text"
                  onChange={(e) => this.changeName(e)} />
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

export default EmployeeCreate
