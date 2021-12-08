const {Bookdetails,transcationdetails,usertables}=require ("../models");
var getbook = async (req, resp)=> {
    try{
        const getbooks= await Bookdetails.findAll();
        return resp.status(200).json(getbooks)
    
    }catch(e){
        console.log(e)
        return resp.status(500).send(e);
    }

}
var postbook= async(req,resp)=>{
    const {title,author,edition,publisher,isbn,genre,url,count}=req.body
    try{
    const getbooks= await Bookdetails.create( {title,author,edition,publisher,isbn,genre,url,count});
     return resp.status(200).json(getbooks)
    }
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }

 var update= async(req,resp)=>{
    const BookId = req.params.BookId;
    const count = req.params.count;
    const UserId = req.params.UserId;
    try{
        const transdetails=await transcationdetails.findOne({where:{UserId:UserId,BookId:BookId}})
        console.log(transcationdetails);
        if(transdetails===null){
        const validation=await Bookdetails.update({count:count-1},{where:{BookId:BookId}});
        
        
        return resp.status(200).json(validation)
    }
    }
   
    catch(e){
        return resp.status(500).json({"message":e})
    }
 
 }

 

 
 module.exports = {getbook,postbook,update}