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
           <li  style={{
        display: "flex",
        gap: "30px",
        marginBottom: "10px",
        border: "2px solid black",
        width: "400px",
        flexWrap:'wrap',
        margin: "auto",
        height: "80px",
        marginBottom: "10px",
        borderRadius: "5px",
        textAlign: "left",
        justifyContent:'space-around'
      }}>
             <span style={{ fontWeight: "bold" }}>ID:</span> {item.relativesid}
             <span style={{ fontWeight: "bold" }}> Relative name: </span>{item.relativesName}
             <span style={{ fontWeight: "bold" }}>Realtive age: </span> {item.relativesAge}
             <span style={{ fontWeight: "bold" }}>Employee ID: </span> {item.employeeid}

           </li>
            
        </li>)
   return(
    <>
      <RelativeContext.Provider value={{relative,setRelative}}>
         <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}>Thêm</p>
          <RelativeCreate/>
           <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}>Xóa</p>
          <RelativeDelete/> 
          <p
          style={{
            fontSize: "40px",
            fontWeight: "bold",
            textAlign: "left",
            marginLeft: "10px",
          }}>Sửa</p>
          <RelativeUpdate/> 
       </RelativeContext.Provider>
       <ul 
        style={{
         listStyle:'none',
          height: "500px",
          overflow: "scroll",
          gap: "30px",
          border:'2px solid black'

        }}>
        {relativeList}
       </ul>
    </>     
   )
}

export default RelativeList