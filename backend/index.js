const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const cookieParser = require('cookie-parser');


app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));


mongoose.connect("mongodb+srv://fidhakk:ibrayisara@cluster0.i4lwajo.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")
const JWT_SECRET = 'jdhsafiudy8#$%4325GFDdjksh';
const User = require('./models/User');
const Cart = require('./models/Cart');

const authenticateToken = (req, res, next) => {
    const token = req.cookies.authToken || '';
    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// User registration
app.post('/auth', async (req, res) => {
    if (req.body.action === 'signup') {
        const { name, email, password, phone, address } = req.body.formData;
        try {
            const user = new User({ name, email, password, phone, address });
            await user.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(400).json({ message: 'Error registering user', error });
        }
    }
    if (req.body.action === 'login') {
        const { email, password } = req.body.formData;
        try {
            const user = await User.findOne({ email });
            if (!user || !(await user.comparePassword(password))) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
            res.cookie('authToken', token, { httpOnly: true });
            res.json({ message: 'Login successful' });
        } catch (error) {
            res.status(400).json({ message: 'Error logging in', error });
        }
    }
});

// API Creation

app.get("/", (req, res) => {
    res.send("Express App is running")

})

// images storage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }

})

const upload = multer({ storage: storage })


// create upload endpoint for images  http://localhost:4000/upload
app.use('/images', express.static('upload/images'))
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`,
    })

})

const Product = require("./models/Product");
// http://localhost:4000/addproduct
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    } else {
        id = 1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("saved")
    res.json({
        success: true,
        name: req.body.name,
    })

})

//creating api to delete products http://localhost:4000/removeproduct
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("removed");
    res.json({
        success: true,
        name: req.body.name,
    })

})

//Creating API for getting all products http://localhost:4000/allproducts
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched");
    res.send(products);

})

app.listen(port, (error) => {
    if (!error) {
        console.log("server running")
    } else {
        console.log("error" + error)
    }
})


// Add to cart endpoint
app.post('/cart', authenticateToken, async (req, res) => {
  const { productId, size } = req.body;
  const userId = req.user.id;

  try {
    let cart = await Cart.findOne({ userId });
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(item => item.productId.toString() === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.items.push({ productId: new mongoose.Types.ObjectId(productId), quantity: 1 });
    }

    await cart.save();
    res.json({ success: true, message: 'Product added to cart' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error adding to cart', error });
  }
});