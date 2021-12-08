import React,{useState,useEffect} from 'react'
const UserId = 2;
const b = 1;
var flag=0;
const current = new Date();
  const Issuedate = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()+1}`;
  const duedate = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()+16}`;


const Books = ()=>{
  const axios = require('axios');
  const[books,setbooks]=useState([]);

 
const getbookdata = async()=>{
  try{
    const data = await axios.get("http://localhost:5042/books");
    setbooks(data.data);
}catch(e){
  console.log(e);
}
};


useEffect(()=>{
  getbookdata();
},[]);



function add(transdata){
  try{
  let check =axios.post("http://localhost:5042/transcation",
          {
            BookId:transdata.BookId,
            BookName:transdata.title,
            UserId:UserId,
            IssueDate:Issuedate,
            duedate:duedate,
            renewdate:duedate      
          }
        )
        if(check!==1)
        axios.put(`http://localhost:5042/books/${transdata.BookId}/${UserId}/${transdata.count}`,{
        })
        
  }catch(e){
    console.log(e);
  }
  
  console.log(transdata);

  
  flag=0;

  
        
        
  
}


  return(
 <div className="Books">
     <h2>Book details</h2>
     <table id="heading" className="bookTable">
      <thead>
       <tr>
          <th> BookId </th>
          <th>title</th>
          <th>author</th>
           <th>edition</th>
          <th>publisher</th>
          <th>genre</th>
          <th>url</th>
          <th>count</th>
          <th>add</th>
        </tr>
      </thead>
      <tbody>
      {books.map((bookitem)=>{
      return(
        <tr>
        <td>{bookitem.BookId} </td>
        <td>{bookitem.title}</td>
        <td> {bookitem.author} </td>
        <td>{bookitem.edition} </td>
        <td>{bookitem.publisher} </td>
        <td>{bookitem.genre}</td>
        <td> {bookitem.url}</td>
        <td>{bookitem.count}</td>
         {/* <td><Example value1={b} value2={bookitem}/></td> */}
         {bookitem.count <=0? <th>not available</th> : <td> <button onClick={()=>add(bookitem)}>add</button></td>}
        </tr>)
        })}
        </tbody>
      </table>
     </div>
     
  );
};
export default Books;