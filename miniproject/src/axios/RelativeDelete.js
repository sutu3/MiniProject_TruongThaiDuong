import { useContext ,useState} from "react"

import { RelativeContext } from "./RelativeList"
import RelativeApi from "../api/RelativeApi"
function RelativeDelete(){


    const  {relative,setRelative}=useContext(RelativeContext)

    const [id,setId]=useState(0)
 
    const changeId =(e)=>{
        setId(e.target.value)
    }
   
   
   
    const deleteRelative = async function(e){
      e.preventDefault();
      try {
        await RelativeApi.deleteByID(id)
        const idint=parseInt(id);

        const index=relative.findIndex(rela=>rela.relativesid===idint)
        console.log(index,"index")
        if (index !== -1) {
            const newRelativeArray= relative.filter((emp, idx) => idx !== index);
            console.log(newRelativeArray)
            setRelative(newRelativeArray)
        }
        setId(-1)
        e.target.reset();
      } catch (error) {
        console.log(error)
      }
             
      
    }
     
        return (
          <form onSubmit={(e) =>deleteRelative(e)}>
              <label>
                  Id:
                  <input
                      type="text"
                      onChange={(e) => changeId(e)} />
                     
              </label>
              <input type="submit" value="Submit" />
          </form>
      );
      
}

export default RelativeDelete;