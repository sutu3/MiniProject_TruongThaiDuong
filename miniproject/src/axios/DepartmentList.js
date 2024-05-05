import React, { Component } from 'react'
import Axios from 'axios';
export class DepartmentList extends Component {
    constructor(props){
        super(props);
        this.state={
            departments:[],
            url:`http://localhost:8080`,
            department:""
        };
    }
    
    getListDepartment = function (){
        Axios.get(`${this.state.url}/api/department`).then(reponse=>{
            this.setState({
                departments:reponse.data
            });
        })
        .catch(error => console.log(error))
    }

   
  
    componentDidMount(){
        this.getListDepartment();
    }
  
  render() {
   
    const deparmentList = this.state.departments.map(
        department=>
        <li key={department.id}>
            {department.name}
        </li>)
   return(
       <ol>
        {deparmentList}
       </ol>
   )
  }
}

export default DepartmentList
