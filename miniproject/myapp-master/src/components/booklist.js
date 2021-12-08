import React,{useState,useEffect} from 'react'
import './css/book.css'
const UserId = '1';
const current = new Date();
  const Issuedate = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()+1}`;
  const duedate = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()+16}`;
const b=1;

  const Books = ()=>{
    const axios = require('axios');
    const[books,setbooks]=useState([]);
  
   
  const getbookdata = async()=>{
    try{
      const data = await axios.get("http://localhost:5040/books");
      setbooks(data.data);
  }catch(e){
    console.log(e);
  }
  };
  
  
  useEffect(()=>{
    getbookdata();
  },[]);
  
  const Example = function(props)
  {const {value1,value2}=props;
     if(value1===1)
     return (<button onClick={()=>add(value2)}>add</button>)
     else
     return 'not available'
  }
  
  function add(transdata){
    axios.post("http://localhost:5040/transcation",
            {
              BookId:transdata.BookId,
              BookName:transdata.title,
              UserId:UserId,
              IssueDate:Issuedate,
              duedate:duedate,
              renewdate:duedate      
            }
          )
    console.log(transdata);
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
          <td> {bookitem.count}</td>
        
           <td><Example value1={b} value2={bookitem}/></td>
          </tr>)
          })}
          </tbody>
        </table>
       </div>
       
    );
  };
export default Books;