const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken")
const multer=require("multer");
const path=require("path");
const cors=require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://fidhakk:ibrayisara@cluster0.i4lwajo.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is running")

})

// images storage engine

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
    return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})

const upload=multer({storage:storage})


// create upload endpoint for images  http://localhost:4000/upload
app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`,
    })

})

const Product = require("./models/Product");
// http://localhost:4000/addproduct
app.post('/addproduct',async(req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("saved")
    res.json({
        success:true,
        name:req.body.name,
    })

})

//creating api to delete products http://localhost:4000/removeproduct
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("removed");
    res.json({
        success:true,
        name:req.body.name,
    })

})

//Creating API for getting all products http://localhost:4000/allproducts
app.get('/allproducts',async(req,res)=>{
    let products= await Product.find({});
    console.log("all products fetched");
    res.send(products);

})

app.listen(port,(error)=>{
    if(!error){
        console.log("server running")
    }else{
        console.log("error"+error)
    }
})

