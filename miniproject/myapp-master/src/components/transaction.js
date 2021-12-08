  import React,{useState,useEffect} from 'react'
  import './css/book.css'
  import './css/transaction.css';
  
 const Transaction = ()=>{
   const axios = require('axios');
   const[booktranscation,setbooktranscation]=useState([]);
  
 const getbookTransaction = async()=>{
   try{
     const transdata = await axios.get("http://localhost:5042/transcation");
 //console.log(data.data);
 setbooktranscation(transdata.data);
 }catch(e){
   console.log(e);
 }
 };
 useEffect(()=>{
   getbookTransaction();
 },[]);
 const deleterow = (BookId) => {
  axios.delete(`http://localhost:5042/transcation/${BookId}`).then((response) => {
    setbooktranscation(
      booktranscation.filter((item) => {
        return item.BookId != BookId;
      })
    );
  });
}
   return(
  <div className="transaction">
      <h2>Transaction details</h2>
      <table id="heading" className="tscTable">
      <thead>
       <tr>
          <th>TranscationId</th>
          <th> UserId</th>
          <th> BookId </th>
          <th>BookName</th>
          <th>IssueDate</th>
           <th>duedate</th>
          <th>renewdate</th>
          <th>return</th>
        </tr>
      </thead>
      <tbody>
      {booktranscation.map((item)=>{
      return(
        <tr>
           <td>{item.TranscationId}</td>
           <td>{item.UserId} </td>
            <td>{item.BookId} </td>
            <td>{item.BookName} </td>
            <td>{item.IssueDate}</td>
            <td> {item.duedate}</td>
            <td> {item.renewdate}</td>
            <td> <button onClick={()=>{deleterow(item.BookId);}}>return</button></td>
        </tr>)
        })}
        </tbody>
      </table>
      </div>
      
   );
};
 
  
 
 export default Transaction;
 
 
