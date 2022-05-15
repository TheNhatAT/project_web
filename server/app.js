const {start} = require("./server");
const bodyParser = require("body-parser")
const express = require("express");
const app = express();

const mysql = require("mysql");
//start();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const port =  5000;
const pool = mysql.createPool({
    connectionLimit:10,
    host: "localhost",
    user:"root",
    password:"",
    database: "home"
    
})
app.get("/user/home",  (req, res)=>{
    const addr = req.query;
    console.log(addr);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        connection.query(`SELECT * from bdhome`, (err, rows)=>{
            connection.release()
        if(!err){
            res.send(rows)
        }    
        else{
            console.log(err)
        }
        })
    })
    
})
app.get("/user/home/address",  (req, res)=>{
    const result = req.query;
    console.log(result);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        connection.query(`SELECT * from bdhome where address like '${result['address']}%' `, (err, rows)=>{
            connection.release()
        if(!err){
            res.send(rows)
        }    
        else{
            console.log(err)
        }
        })
    })
    
})
app.get("/user/home/roommate",  (req, res)=>{
    const result = req.query;
    console.log(result);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        console.log(result['title'])
        connection.query(`SELECT * from bdhome where title like '%${result['title']}%' `, (err, rows)=>{
            connection.release()
        if(!err){
            res.send(rows)
        }    
        else{
            console.log(err)
        }
        })
    })
    
})
app.get("/user/home/filter",  (req, res)=>{
    const result = req.query;
    console.log(result);
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connected as ${connection.threadId}`)
        if('address' in result && 'minimal_area' in result && 'category' in result){
            connection.query(`SELECT * from bdhome 
                                where address like '${result['address']}%' 
                                    and area >= ${result['minimal_area']} 
                                    and area <= ${result['maximal_area']} 
                                    and category = ${result['category']} `,(err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if('address' in result && 'minimal_area' in result && !('category' in result) ){
            connection.query(`SELECT * from bdhome 
                                where address like '${result['address']}%' 
                                    and area >= ${result['minimal_area']} 
                                    and area <= ${result['maximal_area']} `, (err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if('address' in result && !('minimal_area' in result) && !('category' in result) ) {
            connection.query(`SELECT * from bdhome where address like '${result['address']}%'`, (err, rows)=>{
            
                connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if(!('address' in result) && 'minimal_area' in result && 'category' in result ) {
        connection.query(`SELECT * from bdhome 
                            where area >= ${result['minimal_area']} 
                                and area <= ${result['maximal_area']} 
                                and category = ${result['category']}`, (err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if(!('address' in result) && !('minimal_area' in result) && 'category' in result ) {
            connection.query(`SELECT * from bdhome where category = ${result['category']}`, (err, rows)=>{

            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if(!('address' in result) && 'area' in result && !('category' in result) ) {
            connection.query(`SELECT * from bdhome where area >= ${result['minimal_area']} and area <= ${result['maximal_area']}`, (err, rows)=>{
                
            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
        else if('address' in result && !('area' in result) && 'category' in result ) {
            connection.query(`SELECT * from bdhome where address like '${result['address']}%' and category = ${result['category']}`, (err, rows)=>{
                
            connection.release()
            if(!err){
                res.send(rows)
            }    
            else{
                console.log(err)
            }
            })
        }
    })
    
})

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})