import { useState,useContext } from "react";
import RelativeApi from "../api/RelativeApi";
import { RelativeContext } from "./RelativeList";
function RelativeUpdate(){
    const [relativesName,setRelativesName] =useState("");
    const [relativesAge,setRelativesAge]=useState(0);
    const [employeeid,setEmployeeId]=useState(0);
    const [id,setId]=useState(0)
    const  {relative,setRelative}=useContext(RelativeContext)

    const changeId =(e)=>{
    
        setId(e.target.value)
    }
    const changeRelativeName =(e)=>{
        setRelativesName(e.target.value)
     
    }
    const changeRelativeAge=(e)=>{
        setRelativesAge(e.target.value)
    }
    const changeEmployeeId =(e)=>{
        setEmployeeId(e.target.value)
    }
    const updateEmployee =async function(e){
      e.preventDefault();
     try {
        const body={
               
            relativesName,relativesAge,employeeid
        }


      const temp=await RelativeApi.updateByID(id,body);
      console.log( temp)
      const idint=parseInt(id);
      const index=relative.findIndex(rela=>rela.relativesid===idint)
      if(index !==-1){
        setRelative(preRelative=>{
            const newelative=[...preRelative]
            newelative[index]=temp
            return newelative
            
        })
      }
      e.target.reset();
     } catch (error) {
      console.log(error)
     }       
    }
     
    
     
        return (
          <form onSubmit={(e) => updateEmployee(e)}>
              <label>
                  Id:
                  <input
                      type="text"
                      onChange={(e) => changeId(e)} />
                     
                  Name:
                  <input
                      type="text"
                      onChange={(e) => changeRelativeName(e)} />
                  Age:
                  <input
                      type="text"
                      onChange={(e) => changeRelativeAge(e)} />   
                 Department Id:
                  <input
                      type="text"
                      onChange={(e) => changeEmployeeId(e)} />
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
      
}
export default RelativeUpdate;