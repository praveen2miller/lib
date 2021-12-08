const { Model } = require('sequelize');
const {sequelize,User} = require('../models');




var addUser = async (req, resp) => {

    const {username, email, phoneNumber, password} = req.body;
    try{
    const insertData = await User.create({username, email, phoneNumber, password});
    return resp.status(200).json({"message":"registered sucessfully"});
    
    }
    catch(e)
    {
        return resp.status(500).json({"message": "try again"});
    }
}


var log = async(req, resp) =>{

     const {email,password} =req.body;
     try{
         const logdata = await User.findOne({where :{email:email}});
         if(logdata){
             if(logdata.password === password){
         return resp.status(200).json({"message":"Login Successfull"});
         
             }
             else{
                return resp.status(201).json({"message":"incorrect password "});
             }
         }
         else{
            return resp.status(202).json({"message":"user not found"});
         }
     }catch(e){
         //console.log(e);
         return resp.status(501).json({"message": "error"});
     }
    }



module.exports={addUser,log}