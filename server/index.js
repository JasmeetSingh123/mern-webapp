const express=require("express")
const app=express()
const mongoose=require("mongoose")
const FoodModel=require("./models/Food")
const cors=require("cors")



app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://jassi07:singh713@cluster0.iej0or0.mongodb.net/food?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
}
)

app.post("/insert",async (req,res)=>{
    const foodName= req.body.foodName;
    const days= req.body.days
    const food=new FoodModel({foodName:foodName,daysSinceIAte:days})
    
    try {
        food.save()
        res.send("inserted data")
    } catch (error) {
        console.log(error)
    }
})

app.get("/read",async (req,res)=>{
    FoodModel.find({},(err,result)=>{
        if(err){
            res.send(err)
        }
        else{res.send(result)}
    })
})

app.listen(3001,()=>{
    console.log(`server running on port 3001`)
})
