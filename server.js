import express from 'express'
import path from 'path'
// import connectDB from './config/db.js';
import mongoose from 'mongoose'
import Freelancers from './models/Freelancer.js';
// import fs from 'fs';


const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost:27017/d3-app", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
   
    console.log(`MongoDB Connected: ${conn.connection.host}`)
     
  } catch (error) {
    console.error(`Error: ${error.message}`)
    
    process.exit(1)
  }
}

connectDB();
let data;
const temp=Freelancers.find((err,res)=>{
  if(err) console.log(err);
  else data=res;
 });
// console.log(data);
console.log("Hi");

const app = express();           
const port = 8081;    

app.use(express.json());



  app.use(express.static('client/build'));

  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    console.log(data);
  });


app.get('/data', (req, res) => {
 
  res.json(data);
  
})

      
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


 
app.listen(port, () => {            
    console.log(`Now listening on port ${port}`); 
});


// const data = JSON.parse(fs.readFileSync('./database.json', 'utf-8'))
 
// const importData = async () => {
//   try {
//     await Freelancers.create(data)
//     console.log('data successfully imported')
//     // to exit the process
//     process.exit()
//   } catch (error) {
//     console.log('error', error)
//   }
// }
// importData()






