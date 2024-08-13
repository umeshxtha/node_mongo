
const createUser = async (req,res)=>{
    const data = {
        name:req.body.name,
        age:req.body.age,
    }
    await data.save();
   
res.send(data);
}

module.exports=createUser;