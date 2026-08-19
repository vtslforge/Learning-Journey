const express = require("express");
const app = express();
const port = 3001;

//----------------
// will run on /
app.use('/',(req,res,next)=>{
  console.log("The first middleware ran")
  next()
})

//----------------
// will only run on /auth
app.use('/',(req,res,next)=>{
  console.log("2nd middleware")
  // res.send("no no it wont go execute /users") // if  i do this the cycle of the req res will be finished 
  // can't send next after res.send()
  // removing next() here wont let me to /users as of the path /.......
  next()
})


//----------------------------
// get request on route /users
app.get("/users", (req, res) => {
  res.send(`
    <h1>user details</h1>
    <ul>
      <li>Aman singh</li>
      <li>Priya kumari</li>
      <li>Nandan sharma</li>
    </ul>
    `);
});


app.listen(port, () => {
  console.log(`Example app listening on port  http://localhost:${port}`);
});
