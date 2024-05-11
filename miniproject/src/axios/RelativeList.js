import React, { createContext, useEffect, useState } from 'react'
import RelativeApi from '../api/RelativeApi';
import RelativeCreate from './RelativeCreate';
import RelativeDelete from './RelativeDelete';
import RelativeUpdate from './RelativeUpdate';

export const RelativeContext=createContext();

function RelativeList(){
    
    const [relative,setRelative]=useState([]);
    const getListrelative = async function (){
        try {
            const temp=await RelativeApi.getAll();
            setRelative(temp)
     } catch (error) {
      console.log(error)
     }
  }

  
  useEffect(()=>{
    getListrelative();
  },[])
    const relativeList = relative.map((item,index) =>
        <li key={item.relativesid}>
           <pre>
            ID: {item.relativesid}<br/>
            Relative name: {item.relativesName}<br/>
            Realtive age: {item.relativesAge}<br/>
            Employee ID: {item.employeeid}

           </pre>
            
        </li>)
   return(
    <>
      <RelativeContext.Provider value={{relative,setRelative}}>
         <p>Thêm</p>
          <RelativeCreate/>
           <p>Xóa</p>
          <RelativeDelete/> 
          <p>Sửa</p>
          <RelativeUpdate/> 
       </RelativeContext.Provider>
       <ul style={{listStyle:'none'}}>
        {relativeList}
       </ul>
    </>     
   )
}

export default RelativeList