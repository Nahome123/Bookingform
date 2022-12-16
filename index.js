const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
app.use(express.static(__dirname));
const dbPath = path.join(__dirname, "db.json");
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

app.listen(3000, ()=>{
    console.log("Listening on port 3000");
});
//Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/first.html'));
});

app.get("/api/data", (req, res) => {
    res.sendFile(dbPath);

});
//This request searches a file with the specified name and returns a record: example
//http://localhost:3000/api/data/washington
app.get('/api/data/:name',(req,res)=>{
    fs.readFile(
        dbPath,
        (err, data) =>{
            const obj = JSON.parse(data);
            const name = req.params.name;
            const dep = obj.objects.find(c=> c.from===name);
            if(!dep)
                return res.send(404).send('File not found');
            res.send(dep);            
   
        })
});
 
app.post('/api/data', (req, res) => {
    fs.readFile(
        dbPath,
        (err, data) => {
            const obj = JSON.parse(data);
            obj.objects.push(
                {
                    from: req.body.name,
                    to: req.body.type,
                    depdate: req.body.depdate,
                    deptime: req.body.deptime,
                    fullname: req.body.fullname,
                    phonenum: req.body.phonenum,
                    email: req.body.email
                    
                } 
            );
            console.log(obj);
            fs.writeFile(
                dbPath, JSON.stringify(obj),
                (err) => {
                    if (err) console.log(err);
                }
            );
           
          
        }
        
    );
   
    
    
});