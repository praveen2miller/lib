const { QueryTypes } = require('sequelize')
const  db=require('../models');
const {usertable,BookTranscation,Bookdetails}=require ("../models");
var gettranscation = async (req, resp)=> {
    try{
        const gettranscation= await BookTranscation.findAll();
        return resp.status(200).json(gettranscation)
    
    }catch(e){
        console.log(e) 
        return resp.status(500).send(e);
    }

}
var posttranscation= async(req,resp)=>{
    const {UserId,BookId,BookName,IssueDate,duedate,renewdate}=req.body;
    try{
        const validation=await BookTranscation.findOne({where:{UserId:UserId,BookId:BookId}})
        if(validation === null){
        console.log(validation)
        const gettranscation= await BookTranscation.create( {UserId,BookId,BookName,IssueDate,duedate,renewdate});
        return resp.status(200).json(gettranscation)}
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }
 var deleteBook = async (req, resp)=> {
   // const userid = req.params.UserId;
    const Bookid = req.params.BookId;
    try{
        const vBook = await BookTranscation.findOne({where: {BookId: Bookid}});
        console.log(vBook);
        await vBook.destroy();
        return resp.status(200).end();
    }catch(e){
        return resp.status(500).json({"message": e});
    }
}
var upadteduedate=async(req,resp)=>{
    const Userid = req.body.UserId;
   try{
       const bookupdate = await BookTranscation.findOne({where: {UserId:Userid}});
      let date =((new Date(bookupdate.duedate).toISOString()));

     // console.log(date);
      const duedate = await db.sequelize.query("update BookTranscation set `date`=  DATE_ADD(`date`, INTERVAL 16 DAY)", { type: QueryTypes.SELECT
    });
    //console.log(bookupdate.duedate);
       bookupdate.duedate=duedate;
       //console.log(duedate);
      //  await bookupdate.save();
        return resp.status(200).json(duedate);
    }catch(e){
        console.log(e);
        return resp.status(500).json({"message": e});
    }

}
 module.exports = {gettranscation,posttranscation,deleteBook,upadteduedate}