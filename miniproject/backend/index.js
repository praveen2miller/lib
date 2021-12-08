var express = require("express");
const {sequelize}=require("./models");
const {getadmins,postadmin}=require("./controller/admintablecontroller");

const {gettranscation,posttranscation,deleteBook,upadteduedate}=require("./controller/booktranscationcontroller")
const { getbook, postbook,update } = require("./controller/bookdetailscontroller");
const app=express();
const cors=require('cors');
const signupcontrol = require('./controller/signupcontrol')

app.use(cors({
    origin:"*"
}));
app.use(express.json());

app.get("/admins",getadmins);
app.post("/admins",postadmin);

app.get("/transcation",gettranscation);
app.post("/transcation",posttranscation)
app.delete("/transcation/:BookId",deleteBook);
app.put("/transcation/:UserId",upadteduedate)
app.put("/books/:BookId/:UserId/:count",update);
app.get("/books",getbook);
app.post("/books",postbook);

app.post("/add", signupcontrol.addUser);
app.post("/login", signupcontrol.log)
const PORT=5042;
app.listen({port:PORT},async()=>
   {console.log(`server running ${PORT}`)
   try{
   await sequelize.authenticate();
   }
   catch(e){
       console.log(e);
   }
});